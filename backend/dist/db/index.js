"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var env_1 = require("../config/env");
// Replace the uri string with your connection string.
// example : mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority
var URI = "mongodb+srv://".concat(env_1.DB_USERNAME, ":").concat(env_1.DB_PASSWORD, "@").concat(env_1.CLUSTER_URL, "?retryWrites=true&w=majority");
var client = new mongodb_1.MongoClient(env_1.IS_DEVELOPMENT ? "mongodb://localhost:27017/".concat(env_1.DB_NAME) : URI);
console.log("\u26A1\uFE0F[App runing in]: ".concat(env_1.IS_DEVELOPMENT, " mode"));
client.connect(function (error) {
    if (error) {
        console.log("\u26A1\uFE0F[DB]: Could not connected to database!");
        console.log(error);
    }
    else {
        console.log("\u26A1\uFE0F[DB]: Connected to database!");
    }
});
var db = client.db(env_1.DB_NAME);
exports.default = db;
