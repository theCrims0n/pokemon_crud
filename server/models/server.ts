import express, { Application } from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import useRoutes from '../routes/pokemon-crud'
import bodyParser from 'body-parser'

class Server {

    private app: Application;
    private port: string;
    private connection: string;
    private apiPaths = {
        entrenadores: '/api/entrenadores'
    }

    constructor() {

        this.app = express()
        this.port = process.env.PORT || '3001'
        this.connection = process.env.MONGO_URL || 'mongodb://localhost:27017/pokemon'
        this.routes()
        this.middlewares()
    }


    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.static('public'))
        mongoose.connect(this.connection)
    }

    routes() {
        this.app.use(this.apiPaths.entrenadores, useRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port)
        })
    }
}

export default Server