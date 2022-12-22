"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.login = exports.create = void 0;
var model_1 = __importDefault(require("./model"));
var db_1 = __importDefault(require("../../db"));
var utils_1 = require("../../utils");
var mongodb_1 = require("mongodb");
var users = db_1.default.collection('users');
var create = function (_a) {
    var email = _a.email, password = _a.password, firstName = _a.firstName, lastName = _a.lastName;
    return __awaiter(void 0, void 0, void 0, function () {
        var res, msg, error, hashedPassword, user, newUser;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, users.findOne({ email: email })];
                case 1:
                    res = _b.sent();
                    if (res) {
                        msg = 'Email already exits.';
                        error = new Error(msg);
                        error['code'] = 409;
                        error['message'] = msg;
                        throw error;
                    }
                    return [4 /*yield*/, (0, utils_1.generateHash)(password)];
                case 2:
                    hashedPassword = _b.sent();
                    user = new model_1.default({
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                        password: hashedPassword,
                    });
                    return [4 /*yield*/, users.insertOne(user)];
                case 3:
                    newUser = _b.sent();
                    return [2 /*return*/, {
                            user: {
                                id: newUser.insertedId,
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                            },
                        }];
            }
        });
    });
};
exports.create = create;
var login = function (_a) {
    var email = _a.email, password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
        var hashedPassword, res, msg, error, user, accessToken;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, utils_1.generateHash)(password)];
                case 1:
                    hashedPassword = _b.sent();
                    return [4 /*yield*/, users.findOne({ email: email, password: hashedPassword })];
                case 2:
                    res = _b.sent();
                    if (!res) {
                        msg = 'Invalid email or password.';
                        error = new Error(msg);
                        error['code'] = 404;
                        error['message'] = msg;
                        throw error;
                    }
                    user = {
                        id: res._id,
                        email: res.email,
                        firstName: res.firstName,
                        lastName: res.lastName,
                    };
                    accessToken = (0, utils_1.createAccessToken)(__assign(__assign({}, user), { tokenType: 'LoginToken' }));
                    return [2 /*return*/, {
                            user: user,
                            token: accessToken,
                        }];
            }
        });
    });
};
exports.login = login;
var user = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var o_id, res, msg, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                o_id = new mongodb_1.ObjectId(id);
                return [4 /*yield*/, users.findOne({ _id: o_id })];
            case 1:
                res = _a.sent();
                if (!res) {
                    msg = 'User not found in records';
                    error = new Error(msg);
                    error['code'] = 404;
                    error['message'] = msg;
                    throw error;
                }
                delete res['password'];
                return [2 /*return*/, { user: res }];
        }
    });
}); };
exports.user = user;
