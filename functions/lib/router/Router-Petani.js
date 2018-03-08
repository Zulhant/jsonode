"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const get = require("../handlers/petani/petani-get");
const post = require("../handlers/petani/petani-post");
const put = require("../handlers/petani/petani-put");
const params_1 = require("../config/params");
const RouterPetani = express.Router();
RouterPetani.get('/', get.getAllPetani);
RouterPetani.post('/', post.insertData);
RouterPetani.put(`/:${params_1.PETANI_ID}`, put.updateData);
exports.default = RouterPetani;
//# sourceMappingURL=Router-Petani.js.map