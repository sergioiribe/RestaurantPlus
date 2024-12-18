import fondo from '../assets/fondoLogin1.png'
import Login from '../components/LoginText'
import LoginNumber from '../components/LoginNumber'

const LoginAdmin = () => {
  return (
    <div
      className="rotate-[360deg] bg-white"
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <div className="flex w-full h-full p-5 px-28">
        <div
          className="flex flex-col justify-between w-1/2 h-full p-10 border rounded-3xl"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${fondo})`
          }}
        >
          <div className="flex items-center gap-3">
            <p className="text-white">UNA FRASE SABIA</p>
            <div className="w-32 h-[1px] bg-white"></div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-col">
              <p className="font-medium text-white text-7xl ">Sé el</p>
              <p className="font-medium text-white text-7xl ">que todo lo </p>
              <p className="font-medium text-white text-7xl ">conquista</p>
            </div>

            <p className="text-sm text-white pr-[35%]">
              Puedes lograrlo si trabajas duro, confías en el proceso y te
              mantienes fiel al plan.
            </p>
          </div>
        </div>

        <LoginNumber />
      </div>
    </div>
  )
}

export default LoginAdmin
