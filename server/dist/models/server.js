"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const pokemon_crud_1 = __importDefault(require("../routes/pokemon-crud"));
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor() {
        this.apiPaths = {
            entrenadores: '/api/entrenadores'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.connection = process.env.MONGO_URL || 'mongodb://localhost:27017/pokemon';
        this.routes();
        this.middlewares();
    }
    middlewares() {
        this.app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.static('public'));
        mongoose_1.default.connect(this.connection);
    }
    routes() {
        this.app.use(this.apiPaths.entrenadores, pokemon_crud_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map