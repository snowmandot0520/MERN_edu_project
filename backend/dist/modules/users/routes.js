"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("./controller");
var validators_1 = require("./validators");
var authenticated_1 = require("../../middlewares/authenticated");
var router = express_1.default.Router();
router.post('/users/signup', (0, validators_1.validateCreateUserRequest)(), controller_1.createNewUser);
router.post('/users/signin', (0, validators_1.validateSignInUserRequest)(), controller_1.loginUser);
router.get('/users/:userId', authenticated_1.isAuthenticated, controller_1.getUser);
exports.default = router;
