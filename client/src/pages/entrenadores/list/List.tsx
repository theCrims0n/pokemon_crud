import { useEffect } from "react";
import Spinner from "../../../components/ui/Spinner";
import { useEntrenadores } from "../../../store/entrenadores-store"

export const List = () => {

    const { entrenadores, isLoading, getEntrenadores, deleteEntrenador } = useEntrenadores();

    useEffect(() => {
        getEntrenadores()
    }, [])

    const deleteRegister = async (_id: string) => {
        await deleteEntrenador(_id)
        await getEntrenadores()
    }

    const exportPDF = async () => {
        const html2pdf = require('html2pdf.js');
        var element = document.getElementById('divToPrint');

        var opt = {
            margin: 1,
            filename: 'Listado.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        await html2pdf(element, opt);
    }

    return (
        <>
            {
                isLoading
                    ?
                    <Spinner />
                    :
                    <div className="m-10 flex-col space-y-4 ...">
                        <div className="flex space-x-4 ...">
                            <a href="/entrenadores/register"><button className="btn-primary">Crear entrenador</button></a>
                            <button onClick={exportPDF} className="btn-primary">PDF</button>
                        </div>
                        <div id='divToPrint' className="overflow-x-auto shadow-md sm:rounded-lg ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Apellido(s)
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Numero Telefonico
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Medallas
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        entrenadores.map((entrenador, index) => {
                                            return (
                                                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {entrenador.nombre}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {entrenador.apellidos}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {entrenador.numeroTel}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {entrenador.medallas}
                                                    </th>
                                                    <td className="px-6 py-4 flex space-x-8 ...">
                                                        <div>
                                                            <a x-data="{ tooltip: 'Editar' }" href={`/entrenadores/update/${entrenador._id}`}>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="1.5"
                                                                    stroke="currentColor"
                                                                    className="h-6 w-6"
                                                                    x-tooltip="tooltip"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                                    />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a x-data="{ tooltip: 'Eliminar' }" onClick={() => deleteRegister(entrenador._id)} className="cursor-pointer">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="1.5"
                                                                    stroke="currentColor"
                                                                    className="h-6 w-6"
                                                                    x-tooltip="tooltip"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                    />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div >
                    </div>
            }
        </>
    )
}