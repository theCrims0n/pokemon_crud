"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const entrenadoresSchema = new mongoose_1.default.Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    numeroTel: { type: String, required: true },
    medallas: { type: Number, required: false }
});
const Entrenadores = mongoose_1.default.model('entrenadores', entrenadoresSchema);
exports.default = Entrenadores;
//# sourceMappingURL=entrenadores-schema.js.map