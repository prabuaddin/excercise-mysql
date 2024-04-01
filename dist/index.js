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
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./connection"));
const util_1 = __importDefault(require("util"));
const query = util_1.default.promisify(connection_1.default.query).bind(connection_1.default);
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
app.get('/', (req, res) => {
    res.send('<h1>Hallo</h1>');
});
app.get('/passenger', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findPassangers = yield query('SELECT * FROM passenger');
        res.status(200).send({
            error: false,
            message: 'success',
            data: findPassangers
        });
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(port, () => {
    console.log(`🔥[Server] : server is running at http://localhost:${port}`);
});
