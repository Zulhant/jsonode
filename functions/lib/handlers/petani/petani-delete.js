"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const params_1 = require("../../config/params");
exports.updateData = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const idData = req.params[params_1.PETANI_ID];
    try {
        yield index_1.DB.collection('petani').doc(idData).update(req.body);
        res.jsonp({
            code: 200,
            data: 'success'
        });
    }
    catch (error) {
        res.jsonp({
            code: 400,
            data: error
        });
    }
});
//# sourceMappingURL=petani-delete.js.map