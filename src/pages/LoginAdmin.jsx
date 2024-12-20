import fondo from '../assets/fondoLogin1.png'
import Login from '../components/LoginText'
import LoginNumber from '../components/LoginNumber'
import sushi from '../assets/sushi.jpg';
import logosushi from '../assets/logosushi2.jpeg';



const LoginAdmin = () => {
  return (
    <div
      className=" bg-white"
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <div className="flex w-full h-full p-5 pr-28 pl-48">
        <div
          className="flex flex-col justify-end items-start w-1/2 h-full border rounded-3xl p-4"
          style={{
            backgroundPosition: 'left',
            backgroundSize: 'cover',
            backgroundImage: `url(${sushi})`
          }}
        >
          <div className='flex  justify-center items-center w-full '>
            <p className='font-black text-2xl text-black/80 pr-5 ' style={{
            }}>SUSHI FACTORY</p>
            <div className='w-[21rem] h-[5px] bg-black/80 rounded-full mt-[3px]'></div>
          </div>


        </div>

        <LoginNumber />
      </div>
    </div>
  )
}

export default LoginAdmin
