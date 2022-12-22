"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("./config/env");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var multer_1 = __importDefault(require("multer"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("./swagger.json"));
// custom modules
var routes_1 = __importDefault(require("./routes"));
require("./db");
var app = (0, express_1.default)();
// parse application/json
app.use(body_parser_1.default.json());
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, multer_1.default)().array());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.disable('x-powered-by');
app.get('/', function (req, res) {
    res.status(200).json({
        message: 'Welcome to Node API\'s by 007',
    });
});
app.use(routes_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.listen(env_1.PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at ".concat(env_1.IS_DEVELOPMENT ? 'http://localhost:' : '').concat(env_1.PORT));
});
