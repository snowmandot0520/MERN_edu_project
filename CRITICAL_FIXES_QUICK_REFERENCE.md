# 🚨 Critical Fixes Quick Reference

## ⚡ Immediate Actions Required

This document contains the most critical fixes that must be implemented **immediately** before any production deployment.

---

## 1. 🔒 Password Hashing (CRITICAL)

### **File**: `backend/src/utils/hashPayload.ts`

**Current (INSECURE)**:
```typescript
export const generateHash = async (payload) => {
  const hash = await crypto.createHash('sha512').update(payload).digest('hex');
  return hash;
};
```

**Fix (SECURE)**:
```typescript
import bcrypt from 'bcrypt';

export const generateHash = async (password: string): Promise<string> => {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
};

export const compareHash = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};
```

**Steps**:
1. Install bcrypt: `npm install bcrypt @types/bcrypt`
2. Replace the hashPayload.ts file
3. Update user service to use compareHash for login
4. Test thoroughly

---

## 2. 🔐 JWT Authentication Middleware (CRITICAL)

### **File**: `backend/src/middlewares/authenticated.ts`

**Current (INSECURE)**:
```typescript
export const isAuthenticated = async (req, res, next) => {
  const token = req.header('Authorization');
  
  try {
    if (!token) {
        if(whiteListEndpoints.includes(req.url)) {
          return next()
        }
      return sendResponse(res, HttpStatusCode.Unauthorized, { tokenExpired: 0 }, 'Failed to Authenticate');
    }
```

**Fix (SECURE)**:
```typescript
import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

export const isAuthenticated = async (
  req: AuthenticatedRequest, 
  res: Response, 
  next: NextFunction
) => {
  const authHeader = req.header('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendResponse(res, HttpStatusCode.Unauthorized, {}, 'Invalid token format');
  }
  
  const token = authHeader.substring(7);
  
  try {
    const decoded = decryptAccessToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    if (err?.name === 'TokenExpiredError') {
      return sendResponse(res, HttpStatusCode.Unauthorized, { tokenExpired: 1 }, 'Token Expired');
    }
    return sendResponse(res, HttpStatusCode.Unauthorized, {}, 'Invalid token');
  }
};
```

---

## 3. 🔑 User Login Service (CRITICAL)

### **File**: `backend/src/modules/users/services.ts`

**Current (INSECURE)**:
```typescript
const login = async ({ email, password }) => {
  const hashedPassword = await generateHash(password);
  const res = await users.findOne({ email, password: hashedPassword });
```

**Fix (SECURE)**:
```typescript
const login = async ({ email, password }) => {
  const user = await users.findOne({ email });
  
  if (!user) {
    const msg = 'Invalid email or password.';
    const error = new Error(msg);
    error['code'] = 404;
    error['message'] = msg;
    throw error;
  }
  
  const isValidPassword = await compareHash(password, user.password);
  
  if (!isValidPassword) {
    const msg = 'Invalid email or password.';
    const error = new Error(msg);
    error['code'] = 404;
    error['message'] = msg;
    throw error;
  }
  
  const userData = {
    id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  };
  
  const accessToken = createAccessToken({ ...userData, tokenType: 'LoginToken' });

  return {
    user: userData,
    token: accessToken,
  };
};
```

---

## 4. 🛡️ Input Validation (HIGH PRIORITY)

### **Add to all API endpoints**

**Example for URL creation**:
```typescript
// In validators.ts
import { body } from 'express-validator';

const validateCreateShortUrlRequest = () => {
  return [
    body('originalUrl', 'Original URL is required')
      .isString()
      .isURL()
      .withMessage('Please provide a valid URL')
      .trim()
      .escape(),
  ];
};
```

**Example for user creation**:
```typescript
const validateCreateUserRequest = () => {
  return [
    body('firstName', 'FirstName is required')
      .isString()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('FirstName must be between 2 and 50 characters')
      .escape(),
    body('lastName', 'LastName is required')
      .isString()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('LastName must be between 2 and 50 characters')
      .escape(),
    body('email', 'Email is required/invalid')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address'),
    body('password', 'Password is required')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
      .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  ];
};
```

---

## 5. 🔄 Frontend Authentication Hook (HIGH PRIORITY)

### **File**: `frontend/src/hooks/useAuth.ts`

**Current (INSECURE)**:
```typescript
export const useAuth = () => {
  const token = Storage.getItem('token');
  if (token) {
    return true;
  } 
  return false;
};
```

**Fix (SECURE)**:
```typescript
import { useState, useEffect } from 'react';
import Storage from 'src/services/Storage';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const token = Storage.getItem('token');
      
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        // Validate token with backend
        const response = await fetch('/api/v1/auth/validate', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          Storage.removeItem('token');
          setIsAuthenticated(false);
        }
      } catch (error) {
        Storage.removeItem('token');
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, []);

  return { isAuthenticated, isLoading };
};
```

---

## 6. 🚫 Rate Limiting (HIGH PRIORITY)

### **Add to backend/src/index.ts**

```typescript
import rateLimit from 'express-rate-limit';

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply to auth routes
app.use('/api/v1/users/signin', authLimiter);
app.use('/api/v1/users/signup', authLimiter);
```

**Install**: `npm install express-rate-limit`

---

## 7. 🔍 Environment Variable Validation (MEDIUM PRIORITY)

### **Create**: `backend/src/config/validateEnv.ts`

```typescript
import { config } from 'dotenv';

config();

const requiredEnvVars = [
  'TOKEN_SECRET',
  'ACCESS_TOKEN_EXPIRY',
  'ACCESS_TOKEN_ALGO',
  'DB_USERNAME',
  'DB_PASSWORD',
  'DB_NAME',
  'CLUSTER_URL'
];

export const validateEnv = () => {
  const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
};

// Call this in your main index.ts file
validateEnv();
```

---

## 📋 Implementation Checklist

### **Phase 1: Critical Security (Day 1)**
- [ ] Install bcrypt: `npm install bcrypt @types/bcrypt`
- [ ] Replace password hashing in `hashPayload.ts`
- [ ] Fix authentication middleware
- [ ] Update user login service
- [ ] Test all authentication flows

### **Phase 2: Input Validation (Day 2)**
- [ ] Add comprehensive input validation
- [ ] Install rate limiting: `npm install express-rate-limit`
- [ ] Add rate limiting to auth endpoints
- [ ] Test all API endpoints

### **Phase 3: Frontend Security (Day 3)**
- [ ] Update useAuth hook
- [ ] Add token validation endpoint
- [ ] Test frontend authentication
- [ ] Add environment validation

### **Phase 4: Testing (Day 4)**
- [ ] Test all security fixes
- [ ] Verify no regressions
- [ ] Security review
- [ ] Ready for production

---

## ⚠️ Important Notes

1. **Backup your database** before implementing password hashing changes
2. **Test thoroughly** in development environment
3. **Update all existing users** to use new password hashing
4. **Monitor logs** after deployment
5. **Have a rollback plan** ready

---

## 🆘 Emergency Contacts

- **Security Issues**: [Your Security Team]
- **Database Issues**: [Your DBA]
- **Deployment Issues**: [Your DevOps Team]

---

*This document should be reviewed and updated regularly.* 