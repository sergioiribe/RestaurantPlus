import { NavLink } from 'react-router-dom';
import logo from '../assets/logo9.png';
import fondo from '../assets/fondo.png';
import { useState } from 'react';
import sushi from '../assets/factory3.avif';
import logosushi from '../assets/logosushi.jpeg';
import LoginNumber from '../components/LoginNumber';


export const Login = () => {
    const [inputValue, setInputValue] = useState(''); // Estado para almacenar los números ingresados

    // Manejar clic en un número
    const handleNumberClick = (number) => {
        if (inputValue.length < 5) { // Limita a 5 caracteres
            setInputValue((prev) => prev + number);
        }
    };

    // Manejar borrado
    const handleDelete = () => {
        setInputValue((prev) => prev.slice(0, -1));
    };

    return (
        <div
            className="flex flex-col w-screen h-screen px-56 py-5 bg-[#d7d7e1]"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: `url('https://www.icloud.com/system/icloud.com/current/wallpaper.svg')`,
            }}
        >
            {/* Overlay for gradient */}

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `
            linear-gradient(64deg, #5ba0ff, #1a8eff 46%, #2d7eeb)

          `,
                    mixBlendMode: 'hard-light', // Use 'overlay' or 'multiply' for better color blending
                    pointerEvents: 'none',
                    zIndex: 1
                }}></div>

            <div
                className="z-10 grid w-full h-full grid-cols-2 gap-3 rounded-3xl"
                style={{
                    gridTemplateRows: 'repeat(17, minmax(0, 1fr))' // Cambia 15 a 20 para 20 columnas
                }}
            >
                <div className="col-span-2 row-span-2 bg-[#f5f6fb] rounded-3xl flex justify-between items-center px-5">
                    <div className='flex items-center gap-5'>
                        <div
                            className="w-10 h-10 bg-center bg-cover rounded-full"
                            style={{
                                backgroundImage: `url(${logo})`
                            }}
                        ></div>
                        <p className="text-xl font-bold">Restaurant+</p>
                    </div>
                    <div className="flex items-center justify-around gap-10 px-5 py-1 rounded-full bg-[#eeeff4]">
                        <div>
                            <p className="text-sm">Administrador</p>
                        </div>
                        <div className="bg-black/80 rounded-full ">
                            <p className="px-5 py-3 text-sm text-white">Usuario</p>
                        </div>

                        {/* <div>
                            <p className="text-sm">Inventario</p>
                        </div> */}
                        <div>
                            <p className="text-sm">Soporte</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg> */}
                        </div>
                        <div>
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="bi bi-bell"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                            </svg> */}
                        </div>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-10 h-10 bg-center bg-cover rounded-full"
                                style={{
                                    backgroundImage: `url(${logosushi})`
                                }}
                            ></div>
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                strokeWidth="2"
                                fill="black"
                                className=" bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                />
                            </svg> */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col col-span-1 gap-10 p-5 bg-white rounded-3xl"
                    style={{
                        gridRow: 'span 16',
                        backgroundImage: `url(${sushi})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >


                </div>
                <div className="flex flex-col col-span-1 gap-10 p-5 bg-white rounded-3xl items-center"
                    style={{ gridRow: 'span 16' }}>


                    <LoginNumber />

                </div>
            </div>
        </div>
    );
};
