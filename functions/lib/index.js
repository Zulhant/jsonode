"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const database_1 = require("./config/database");
const Router_Petani_1 = require("./router/Router-Petani");
const validationAndDecodedToken_1 = require("./middlewares/validationAndDecodedToken");
const app = express();
exports.serviceAccount = require('../../key-api.json');
admin.initializeApp({
    credential: admin.credential.cert(exports.serviceAccount),
    databaseURL: database_1.DB_URL
});
app.use(cors({
    origin: true
}));
exports.DB = admin.firestore();
app.use(validationAndDecodedToken_1.validateAndDecodedToken);
app.use('/petani', Router_Petani_1.default);
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map