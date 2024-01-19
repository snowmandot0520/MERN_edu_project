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
router.get('/urls/list', authenticated_1.isAuthenticated, controller_1.getAllShortUrlsByUser);
router.post('/urls/short', authenticated_1.isAuthenticated, (0, validators_1.validateCreateShortUrlRequest)(), controller_1.createShortUrl);
router.get('/urls/:urlId', controller_1.getShortUrl);
exports.default = router;
