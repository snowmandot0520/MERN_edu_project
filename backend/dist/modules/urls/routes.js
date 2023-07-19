"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("./controller");
var validators_1 = require("./validators");
var router = express_1.default.Router();
router.post('/url/short', (0, validators_1.validateCreateShortUrlRequest)(), controller_1.createShortUrl);
router.get('/url/:urlId', controller_1.getShortUrl);
exports.default = router;
