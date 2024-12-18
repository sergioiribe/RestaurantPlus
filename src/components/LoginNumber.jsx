import { useState } from 'react'
import logo from '../assets/logo.png'

export const LoginNumber = () => {
  const [inputValue, setInputValue] = useState('') // Estado para almacenar los números ingresados

  // Manejar clic en un número
  const handleNumberClick = (number) => {
    if (inputValue.length < 5) {
      setInputValue((prev) => prev + number)
    }
  }

  // Manejar borrado
  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1))
  }

  return (
    <div className="flex flex-col items-center justify-between w-1/2 h-full px-20 py-6 bg-white">
      <p className="text-lg font-semibold">
        <span
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${logo})`
          }}
        ></span>
        Restaurant+
      </p>
      <div className="flex flex-col items-center gap-10 mb-10">
        <div>
          <p className="mb-2 text-5xl text-center">Bienvenido</p>
          <p className="text-[#818181] text-center text-sm">
            Ingresa tu PIN para acceder a tu cuenta
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-5 mb-4 text-4xl text-black min-h-10">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 
                                ${
                                  index < inputValue.length
                                    ? 'border-2 border-black/80 bg-black/80'
                                    : 'border-2 border-black/40'
                                }`}
              ></div>
            ))}
          </div>

          {/* Grid numérico */}
          <div className="grid grid-cols-3 gap-4 p-4 ">
            {/* Botones numéricos */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white transition-all duration-300 rounded-full bg-black/80 backdrop-blur-3xl hover:bg-black/40"
              >
                {num}
              </button>
            ))}

            {/* Botón vacío */}
            <div></div>

            {/* Botón 0 */}
            <button
              onClick={() => handleNumberClick(0)}
              className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white transition-all duration-300 rounded-full bg-black/80 backdrop-blur-3xl hover:bg-black/40"
            >
              0
            </button>

            {/* Botón de borrar */}
            <button
              onClick={handleDelete}
              className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-black transition-all duration-300 rounded-full backdrop-blur-md hover:bg-red-500/100 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000" /* Relleno */
                stroke="currentColor" /* Borde */
                strokeWidth="1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginNumber
