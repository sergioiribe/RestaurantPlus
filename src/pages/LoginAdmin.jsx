import fondo from '../assets/fondoLogin1.png'
import Login from '../components/LoginText'

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
            <p className="text-white">A WISE QUOTE</p>
            <div className="w-32 h-[1px] bg-white"></div>
          </div>
          <div className="pr-[35%] flex flex-col gap-3">
            <p className="font-medium text-white text-7xl">
              Get Everything You Want
            </p>
            <p className="text-sm text-white">
              You can get everything you want if you work hard, trust the
              process, and stick yo the plan
            </p>
          </div>
        </div>
        <Login />
      </div>
    </div>
  )
}

export default LoginAdmin
