"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFRESH_TOKEN_ALGO = exports.REFRESH_TOKEN_EXPIRY = exports.ACCESS_TOKEN_ALGO = exports.ACCESS_TOKEN_EXPIRY = exports.TOKEN_SECRET = exports.EMAIL_API_KEY = exports.EMAIL_USERNAME = exports.EMAIL_PORT = exports.EMAIL_HOST = exports.CLUSTER_URL = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USERNAME = exports.IS_DEVELOPMENT = exports.PORT = void 0;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.PORT = process.env.PORT || 8080;
exports.IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
exports.DB_USERNAME = process.env.DB_USERNAME;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_NAME = process.env.DB_NAME;
exports.CLUSTER_URL = process.env.CLUSTER_URL;
exports.EMAIL_HOST = process.env.EMAIL_HOST;
exports.EMAIL_PORT = process.env.EMAIL_PORT;
exports.EMAIL_USERNAME = process.env.EMAIL_USERNAME;
exports.EMAIL_API_KEY = process.env.EMAIL_API_KEY;
exports.TOKEN_SECRET = process.env.TOKEN_SECRET;
exports.ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
exports.ACCESS_TOKEN_ALGO = process.env.ACCESS_TOKEN_ALGO;
exports.REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;
exports.REFRESH_TOKEN_ALGO = process.env.REFRESH_TOKEN_ALGO;
