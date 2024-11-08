"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_crud_1 = require("../controller/pokemon-crud");
const body_parser_1 = __importDefault(require("body-parser"));
const router = (0, express_1.Router)();
var jsonParser = body_parser_1.default.json();
router.get('/', pokemon_crud_1.getEntrenadores);
router.get('/:_id', pokemon_crud_1.getEntrenadorById);
router.post('/post', jsonParser, pokemon_crud_1.postEntrenador);
exports.default = router;
//# sourceMappingURL=pokemon-crud.js.map