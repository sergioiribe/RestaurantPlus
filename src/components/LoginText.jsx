import logo from '../assets/logoLogin.svg'

const LoginText = () => {
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
      <div className="flex flex-col gap-10">
        <div>
          <p className="mb-2 text-5xl text-center">Welcome Back</p>
          <p className="text-[#818181] text-center text-sm">
            Enter your email and password to access your account
          </p>
        </div>
        <div>
          <p className="mb-2 text-sm text-start">Email</p>
          <input
            type="email"
            className="bg-[#f5f7fa] w-full rounded-lg p-3 mb-5 text-xs focus:outline-none"
            placeholder="Enter your email"
          />
          <p className="mb-2 text-sm text-start">Password</p>
          <input
            type="password"
            className="bg-[#f5f7fa] w-full rounded-lg p-3 mb-5 text-xs focus:outline-none"
            placeholder="Enter your password"
          />
          <div className="flex items-center justify-between">
            <div className="flex">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm">Remember me</p>
            </div>

            <p className="text-sm">Forgot password?</p>
          </div>
        </div>
        <div className="w-full p-2 bg-black rounded-lg">
          <p className="w-full font-medium text-center text-white">Sign In</p>
        </div>
      </div>
      <p className="text-sm text-[#818181]">
        Dont have an account?{' '}
        <span className="font-medium text-black">Sign Up</span>
      </p>
    </div>
  )
}

export default LoginText
