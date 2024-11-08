import { Router } from "express";
import { deleteEntrenador, getEntrenadorById, getEntrenadores, postEntrenador, updateEntrenador } from "../controller/pokemon-crud";
import bodyParser from 'body-parser'

const router = Router()
var jsonParser = bodyParser.json()
router.get('/', getEntrenadores)
router.get('/:_id', getEntrenadorById)
router.post('/post', jsonParser, postEntrenador)
router.put('/put/:_id', jsonParser, updateEntrenador)
router.delete('/delete/:_id', deleteEntrenador)

export default router