import { body } from 'express-validator';

const validateCreateUserRequest = () => {
  return [
    body('firstName', 'FirstName is required')
      .isString()
      .isLength({ min: 3 })
      .withMessage('FirstName must be at least 3 chars long'),
    body('lastName', 'LastName is required')
      .isString()
      .isLength({ min: 3 })
      .withMessage('LastName must be at least 3 chars long'),
    body('email', 'Email is required/invalid').isEmail(),
    body('password', 'Password is required')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 chars long'),
  ];
};

export { validateCreateUserRequest };
