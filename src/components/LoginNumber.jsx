import { useState } from 'react'


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
    <div className="flex flex-col items-center justify-between h-full px-20 py-6 bg-white">

      <div className="flex flex-col items-center gap-5">
        <div>
          <p className="mb-2 text-5xl text-center">Bienvenido</p>
          <p className="text-[#818181] text-center text-sm">
            Ingresa tu PIN para acceder a tu cuenta
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-5 text-4xl text-black min-h-10 mb-5">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 
                                ${index < inputValue.length
                    ? 'border-2 border-black/80 bg-black/80'
                    : 'border-2 border-black/40'
                  }`}
              ></div>
            ))}
          </div>

          {/* Grid numérico */}
          <div className="grid grid-cols-3 gap-5">
            {/* Botones numéricos */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="flex items-center justify-center w-20 h-20 text-2xl font-bold text-white transition-all duration-300 rounded-full bg-black/80 backdrop-blur-3xl hover:bg-black/40"
              >
                {num}
              </button>
            ))}

            {/* Botón vacío */}
            <div></div>

            {/* Botón 0 */}
            <button
              onClick={() => handleNumberClick(0)}
              className="flex items-center justify-center w-20 h-20 text-2xl font-bold text-white transition-all duration-300 rounded-full bg-black/80 backdrop-blur-3xl hover:bg-black/40"
            >
              0
            </button>

            {/* Botón de borrar */}
            <button
              onClick={handleDelete}
              className="flex items-center justify-center w-20 h-20 text-2xl font-bold text-black transition-all duration-300 rounded-full backdrop-blur-md hover:bg-red-500/100 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
              </svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginNumber
