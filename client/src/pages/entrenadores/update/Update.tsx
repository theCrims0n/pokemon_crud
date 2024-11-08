import { useForm } from "react-hook-form"
import { Entrenadores } from "../../../interface/entrenadores-interface"
import { useEntrenadores } from "../../../store/entrenadores-store"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import Spinner from "../../../components/ui/Spinner"

export const Update = () => {

    const { register, handleSubmit, formState: { isLoading, isSubmitted, isSubmitting, errors }, setError, getValues, setValue } = useForm<Entrenadores>()

    const { getEntrenadorById, updateEntrenador, entrenador, isLoading: isLoadingEntrenador } = useEntrenadores()

    const { _id } = useParams()

    const onSubmit = async (data: Entrenadores) => {

        const body = data

        updateEntrenador(_id || '', body)

    }

    useEffect(() => {
        if (_id != '') {
            getEntrenadorById(_id || '')
        }
    }, [])
    console.log(entrenador)

    const SaveButton = () => {

        return (
            <>
                {
                    isSubmitting ?
                        <button disabled type="button" className="block w-full btn-disabled">
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                            </svg>
                            Guardando...
                        </button>
                        :
                        <button type='submit' className="block w-full btn-success">{'Actualizar'}</button>
                }
            </>
        )
    }

    return (
        <div className='m-12 flex-col space-y-4 ...'>
            <a href="/"><button className="btn-primary">Volver</button></a>
            {
                isLoadingEntrenador || entrenador.length == 0
                    ?
                    <Spinner />
                    :
                    <div className='p-6 bg-white border border-gray-100 rounded-lg shadow'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid gap-6 mb-6 md:grid-cols-2 '>
                                <div>
                                    <label htmlFor="nombre" className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Nombre*</label>
                                    <input defaultValue={entrenador[0].nombre} maxLength={50} type="text" {...register('nombre', { required: 'El campo es requerido' })}
                                        className="px-5 py-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-200 rounded mb-5" />
                                    <p hidden={!errors.nombre} className="h-2 mt- text-sm text-red-600 dark:text-red-500">El Nombre es requerido</p>
                                </div>
                                <div>
                                    <label htmlFor="apellidos" className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>{'Apellido(s)*'}</label>
                                    <input defaultValue={entrenador[0].apellidos} maxLength={50} type="text" {...register('apellidos', { required: 'El campo es requerido' })}
                                        className="px-5 py-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-200 rounded mb-5" />
                                    <p hidden={!errors.apellidos} className="h-2 mt- text-sm text-red-600 dark:text-red-500">El Apellido es requerido</p>
                                </div>
                                <div>
                                    <label htmlFor="numeroTel" className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>{'Numero Telefonico*'}</label>
                                    <input defaultValue={entrenador[0].numeroTel} maxLength={50} type="text" {...register('numeroTel', { required: 'El campo es requerido' })}
                                        className="px-5 py-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-200 rounded mb-5" />
                                    <p hidden={!errors.numeroTel} className="h-2 mt- text-sm text-red-600 dark:text-red-500">El Numero Telefonico es requerido</p>
                                </div>
                                <div>
                                    <label htmlFor="medallas" className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>{'Medallas'}</label>
                                    <input defaultValue={entrenador[0].medallas} maxLength={50} type="number" {...register('medallas', { required: false })}
                                        className="px-5 py-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-200 rounded mb-5" />
                                </div>
                            </div>
                            <div className='mb-12'>
                                <SaveButton />
                            </div>
                        </form>
                    </div>
            }
        </div>
    )

}

