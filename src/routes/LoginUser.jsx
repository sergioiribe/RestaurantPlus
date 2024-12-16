import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export const LoginUser = () => {
  return (
    <div className="w-[100wv] min-h-[100svh]"
    style={{
        boxShadow: '17px 20px 40px rgba(0, 0, 0, 0.65)',
        background: 'rgba(149, 33, 36, 1)',
        backdropFilter: 'blur(15px)'
      }}>
        <div className="flex h-[20vh] md:h-[10vh] w-100 justify-center items-center gap-2 md:gap-10">
                <NavLink to="/">
                    <picture className='w-1/4 md:w-1/6'>
                        {/* Imagen para pantallas grandes */}
                        <source srcSet={logo} media="(min-width: 768px)" />
                        {/* Imagen para pantallas pequeñas */}
                        <img src={logo} alt="Coppel" className=" h-[10vh] md:h-[9vh]" />
                    </picture>
                </NavLink>
                <p className="text-white font-bold md:text-[20px] text-[20px] ">Restaurante+</p>
            </div>
        <div>
            Login User
        </div>
    </div>
  )
}