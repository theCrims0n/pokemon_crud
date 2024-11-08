import mongoose from "mongoose";

const entrenadoresSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    numeroTel: { type: String, required: true },
    medallas: { type: Number, required: false }
})

const Entrenadores = mongoose.model('entrenadores', entrenadoresSchema);

export default Entrenadores