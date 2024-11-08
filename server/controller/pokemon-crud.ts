import { Request, Response } from "express"
import Entrenadores from "../schema/entrenadores-schema"

export const getEntrenadores = async (req: Request, res: Response) => {
    try {
        const result = await Entrenadores.find()
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
        res.json({ body: result })

    } catch (error) {
        res.json({ error: error })
    }
}

export const getEntrenadorById = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params
        const result = await Entrenadores.findById({ _id })
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
        res.json({ body: result })

    } catch (error) {
        res.json({ error: error })
    }
}

export const postEntrenador = async (req: Request, res: Response) => {
    try {
        const { nombre, apellidos, numeroTel, medallas } = req.body
        const post = new Entrenadores({ nombre, apellidos, numeroTel, medallas })
        post.save();
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
        res.json({ message: 'ok' })

    } catch (error) {
        console.log(error)
        res.json({ error: error })
    }
}

export const updateEntrenador = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params
        const result = Entrenadores.findByIdAndUpdate(_id, req.body)
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
        res.json({ message: result })

    } catch (error) {
        console.log(error)
        res.json({ error: error })
    }
}

export const deleteEntrenador = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params
        const result = Entrenadores.findByIdAndDelete({_id})
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
        res.json({ message: result })

    } catch (error) {
        console.log(error)
        res.json({ error: error })
    }
}