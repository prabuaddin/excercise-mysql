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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPassangerTotalQuery = exports.findPassangersSurvivedQuery = exports.findPassangersQuery = void 0;
const connection_1 = __importDefault(require("../../connection"));
const util_1 = __importDefault(require("util"));
const query = util_1.default.promisify(connection_1.default.query).bind(connection_1.default);
const findPassangersQuery = (_a) => __awaiter(void 0, [_a], void 0, function* ({ Name, Survived, Pclass }) {
    if (Name)
        return yield query('SELECT * FROM passenger WHERE Name LIKE ?', [`%${Name}%`]);
    if (Survived && Pclass)
        return yield query('SELECT * FROM passenger WHERE Survived = ? AND Pclass = ?', [Survived, Pclass]);
});
exports.findPassangersQuery = findPassangersQuery;
const findPassangersSurvivedQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield query('SELECT COUNT(*) as Total_Selamat, Pclass FROM passenger WHERE Survived = 1 GROUP BY Pclass HAVING Total_Selamat');
});
exports.findPassangersSurvivedQuery = findPassangersSurvivedQuery;
const findPassangerTotalQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield query('SELECT COUNT(*) As total_selamat, Sex FROM passenger WHERE Survived = 1 GROUP BY Sex HAVING total_selamat');
});
exports.findPassangerTotalQuery = findPassangerTotalQuery;
