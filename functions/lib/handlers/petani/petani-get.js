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
const helpers_response_1 = require("../../helpers/helpers-response");
exports.getAllPetani = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const snapOfPetani = yield index_1.DB.collection('petani').get();
        if (snapOfPetani) {
            const alldata = [];
            snapOfPetani.forEach(documentOfpetani => {
                const datapetani = documentOfpetani.data();
                datapetani.id = documentOfpetani.id;
                alldata.push(datapetani);
            });
            res.jsonp(helpers_response_1.default.success(alldata));
        }
    }
    catch (error) {
        res.jsonp(helpers_response_1.default.bad_request(error));
    }
});
//# sourceMappingURL=petani-get.js.map