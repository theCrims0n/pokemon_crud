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
exports.postEntrenador = exports.getEntrenadorById = exports.getEntrenadores = void 0;
const entrenadores_schema_1 = __importDefault(require("../schema/entrenadores-schema"));
const getEntrenadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield entrenadores_schema_1.default.find();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        res.json({ body: result });
    }
    catch (error) {
        res.json({ error: error });
    }
});
exports.getEntrenadores = getEntrenadores;
const getEntrenadorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const result = yield entrenadores_schema_1.default.findById({ _id });
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        res.json({ body: result });
    }
    catch (error) {
        res.json({ error: error });
    }
});
exports.getEntrenadorById = getEntrenadorById;
const postEntrenador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { nombre, apellidos, numeroTel, medallas } = req.body;
        const post = new entrenadores_schema_1.default({ nombre, apellidos, numeroTel, medallas });
        post.save();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        res.json({ message: 'ok' });
    }
    catch (error) {
        console.log(error);
        res.json({ error: error });
    }
});
exports.postEntrenador = postEntrenador;
//# sourceMappingURL=pokemon-crud.js.map