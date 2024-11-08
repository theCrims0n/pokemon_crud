import { create } from 'zustand'
import axios from 'axios'
import { Entrenadores } from '../interface/entrenadores-interface';

interface State {
    isLoading: boolean;
    entrenador: Entrenadores[];
    entrenadores: Entrenadores[];
    getEntrenadores: () => void;
    getEntrenadorById: (_id: string) => void;
    postEntrenador: (body: Entrenadores) => void;
    updateEntrenador: (_id: string, body: Entrenadores) => void;
    deleteEntrenador: (_id: string) => void;
}

export const useEntrenadores = create<State>((set) => ({

    isLoading: false,
    entrenador: [],
    entrenadores: [],
    getEntrenadores: async () => {
        set({ isLoading: true })
        const result = await axios.get('http://localhost:3001/api/entrenadores/')
        if (result.status != 200) {
            set({ isLoading: false })
            return
        }
        set({ isLoading: false, entrenadores: result.data.body })
    },
    getEntrenadorById: async (_id) => {
        set({ isLoading: true })
        const result = await axios.get(`http://localhost:3001/api/entrenadores/${_id}`)
        if (result.status != 200) {
            set({ isLoading: false })
            return
        }
        set({ isLoading: false, entrenador: [result.data.body] })

    },
    postEntrenador: async (body) => {
        set({ isLoading: true })
        console.log(body)
        await axios.post(`http://localhost:3001/api/entrenadores/post/`, body)
        set({ isLoading: false })
    },
    updateEntrenador: async (_id, body) => {
        set({ isLoading: true })
        await axios.put(`http://localhost:3001/api/entrenadores/put/`, { _id, body })
        set({ isLoading: false })

    },
    deleteEntrenador: async (_id) => {
        console.log(_id)
        set({ isLoading: true })
        await axios.delete(`http://localhost:3001/api/entrenadores/delete/`, { params: {_id} })
        set({ isLoading: false })

    }
}))