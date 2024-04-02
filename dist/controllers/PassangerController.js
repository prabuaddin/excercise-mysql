"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTotalPassangers = exports.findPassangersSurvived = exports.findPassangers = void 0;
const PassangerService_1 = require("../services/PassangerService/PassangerService");
const findPassangers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Name, Survived, Pclass } = req.query;
        if (!Name && !(Survived && Pclass))
            throw { status: 404, message: 'Req query must valid' };
        const findPassangers = yield (0, PassangerService_1.findPassangersQuery)({ Name, Survived, Pclass });
        res.status(200).send({
            error: false,
            message: "success",
            data: findPassangers,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.findPassangers = findPassangers;
const findPassangersSurvived = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findPassangerSurvived = yield (0, PassangerService_1.findPassangersSurvivedQuery)();
        res.status(200).send({
            error: false,
            message: "success",
            data: findPassangerSurvived,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findPassangersSurvived = findPassangersSurvived;
const findTotalPassangers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findTotalPassanger = yield (0, PassangerService_1.findPassangerTotalQuery)();
        res.status(200).send({
            error: false,
            message: "success",
            data: findTotalPassanger,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findTotalPassangers = findTotalPassangers;
