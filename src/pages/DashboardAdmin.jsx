import CircularChart from '../components/CircularChart'

const DashboardAdmin = () => {
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
        backgroundImage: `url('https://www.icloud.com/system/icloud.com/current/wallpaper_dark.svg')`
      }}
    >
      {/* Overlay for gradient */}

      <div
        className="z-10 grid w-full h-full grid-cols-3 gap-3 rounded-3xl"
        style={{
          gridTemplateRows: 'repeat(17, minmax(0, 1fr))' // Cambia 15 a 20 para 20 columnas
        }}
      >
        <div className="col-span-3 row-span-2 bg-[#f5f6fb] rounded-3xl flex justify-between items-center px-5">
          <div>
            <p className="text-xl font-bold">Restaurant+</p>
          </div>
          <div className="flex items-center justify-around gap-10 px-5 py-1 rounded-full bg-[#eeeff4]">
            <div>
              <p className="text-sm">Usuarios</p>
            </div>
            <div className="bg-black rounded-full ">
              <p className="px-5 py-3 text-sm text-white">Dashboard</p>
            </div>

            <div>
              <p className="text-sm">Inventario</p>
            </div>
            <div>
              <p className="text-sm">Facturas</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-center bg-cover rounded-full"
                style={{
                  backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s'})`
                }}
              ></div>
              <svg
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
              </svg>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col col-span-1 gap-10 p-5 bg-white rounded-3xl"
          style={{ gridRow: 'span 16' }}
        >
          <div className="flex items-center justify-between h-[5%]">
            <p className="text-xl font-medium">Activity</p>
            <div className="flex items-center gap-1 px-3 py-1 border-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <p className="text-sm">Last 7 days</p>
            </div>
          </div>
          <div className="relative w-full h-[42%]">
            <div
              className="absolute w-full border-t border-black border-dashed"
              style={{
                top: '60%', // Ajusta la posición de la línea
                zIndex: 10 // Asegura que la línea esté por encima de las barras
              }}
            >
              {/* Etiqueta flotante en la línea */}
              <p
                className="absolute px-2 py-1 text-xs text-white bg-black rounded -top-3"
                style={{ zIndex: 20 }}
              >
                52 Sales
              </p>
            </div>
            <div className="flex ">
              <p className="text-5xl font-bold">64</p>
              <div className="flex flex-col justify-end px-3">
                <p className="text-xs text-neutral-400">Total</p>
                <p className="text-xs text-neutral-400">sales</p>
              </div>
            </div>
            <div className="flex items-end justify-between w-full h-full">
              <div className=" w-[13%] h-[40%] flex flex-col justify-center items-center">
                <div className="bg-[#d5c6ff] w-full h-full rounded-xl"></div>
                <p className="text-xs text-neutral-400">Mon</p>
              </div>
              <div className=" w-[13%] h-[30%] flex flex-col justify-center items-center">
                <div className="bg-[#d5c6ff] w-full h-full rounded-xl"></div>
                <p className="text-xs text-neutral-400">Tue</p>
              </div>
              <div className=" w-[13%] h-[60%] flex flex-col justify-center items-center">
                <div className="bg-[#d5c6ff] w-full h-full rounded-xl"></div>
                <p className="text-xs text-neutral-400">Wed</p>
              </div>
              <div className=" w-[13%] h-[45%] flex flex-col justify-center items-center">
                <div className="bg-[#d5c6ff] w-full h-full rounded-xl"></div>
                <p className="text-xs text-neutral-400">Thu</p>
              </div>
              <div className=" w-[13%] h-[70%] flex flex-col justify-center items-center">
                <div className="bg-[#6f34ff] w-full h-full rounded-xl"></div>
                <p className="text-xs text-neutral-400">Fri</p>
              </div>
              <div className=" w-[13%] h-[50%] flex flex-col justify-center items-center">
                <div className="bg-[#d5c6ff] w-full h-full rounded-xl"></div>
                <p className="text-xs text-neutral-400">Sat</p>
              </div>
              <div className=" w-[13%] h-[60%] flex flex-col justify-center items-center">
                <div className="bg-[#d5c6ff] w-full h-full rounded-xl"></div>
                <p className="text-xs text-neutral-400">Sun</p>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-[#f7f8fa] w-full rounded-2xl h-[53%] p-3 ">
            <div className="flex flex-col items-center justify-between h-full">
              <p className="w-full text-lg font-medium">Metricas</p>
              <div className="flex ">
                <p className="text-5xl font-bold">$12,345</p>
                <div className="flex flex-col justify-end px-3">
                  <p className="text-xs text-neutral-400">Total</p>
                  <p className="text-xs text-neutral-400">sales</p>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-[#6f34ff] w-full rounded-xl px-5 py-3 flex gap-2 items-center">
                  <div
                    className="bg-center bg-cover rounded-full w-14 h-14"
                    style={{
                      backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s'})`
                    }}
                  ></div>
                  <div className="w-[70%]">
                    <p className="text-lg text-white">Kristin Watson</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-white">Vendido:</p>
                      <p className="text-2xl font-bold text-white">$1,568</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-1 gap-5 p-5 bg-white row-span-8 rounded-3xl">
          <p className="text-xl font-medium">Progress Statistics</p>
          <div className="flex">
            <p className="text-5xl font-bold">64%</p>
            <div className="flex flex-col justify-end px-3">
              <p className="text-xs text-neutral-400">Total</p>
              <p className="text-xs text-neutral-400">activity</p>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-1">
            <div className="flex w-full gap-1">
              <div className="bg-[#6e34ff] h-1 w-[24%] rounded-full"></div>
              <div className="bg-[#47c883] h-1 w-[33%] rounded-full"></div>
              <div className="bg-[#ff771f] h-1 w-[41%] rounded-full"></div>
            </div>
            <div className="flex w-full gap-1">
              <span className="text-[10px] w-[24%]">24%</span>
              <span className="text-[10px] w-[33%]">35%</span>
              <span className="text-[10px] w-[41%]">41%</span>
            </div>
          </div>
          <div className="bg-[#f7f8fa] w-full flex rounded-2xl p-4">
            <div className="flex flex-col items-center w-1/3 gap-2 pr-4 border-r-2">
              <div className="h-7 w-7 bg-[#6e34ff] rounded-full"></div>
              <p className="text-xl font-medium">8</p>
              <p className="text-xs text-neutral-500">In progress</p>
            </div>
            <div className="flex flex-col items-center w-1/3 gap-2 px-4">
              <div className="h-7 w-7 bg-[#47c883] rounded-full"></div>
              <p className="text-xl font-medium">12</p>
              <p className="text-xs text-neutral-500">Completed</p>
            </div>
            <div className="flex flex-col items-center w-1/3 gap-2 pl-4 border-l-2">
              <div className="h-7 w-7 bg-[#ff771f] rounded-full"></div>
              <p className="text-xl font-medium">14</p>
              <p className="text-xs text-neutral-500">Upcoming</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between col-span-1 p-5 bg-white row-span-8 rounded-3xl ">
          <p className="text-xl font-medium">Best products</p>
          <div className="w-full">
            <CircularChart />
          </div>

          <div className="w-full py-3 text-center text-white bg-black rounded-xl">
            Add aliments
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-5 p-5 bg-white row-span-8 rounded-3xl">
          <div className="flex justify-between w-full">
            <p className="text-xl font-medium">My schedule</p>
            <div className="flex gap-3">
              <div className="border-2 rounded-full h-7 w-7 border-[#eeeeee] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  strokeWidth="2"
                  fill="black"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
              </div>
              <p className="font-medium">Today</p>
              <div className="border-2 rounded-full h-7 w-7 border-[#eeeeee] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  strokeWidth="2"
                  fill="black"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-[80%] flex gap-4 ">
            <div className="bg-[#f7f8fa] h-full w-1/3 rounded-2xl p-3 flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-neutral-400">10: 30 - 12:00</p>
                <p className="font-medium">Technical English for Beginners</p>
                <p className="w-16 p-1 text-xs font-medium text-center text-blue-700 bg-blue-200 rounded-lg">
                  Beginner
                </p>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-8 h-8 bg-center bg-cover rounded-full"
                  style={{
                    backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s'})`
                  }}
                ></div>
                <div>
                  <p className="text-xs">Kristin Watson</p>
                  <p className="text-xs text-neutral-400">Mentor</p>
                </div>
              </div>
            </div>
            <div className="bg-[#6f34ff] h-full w-1/3 rounded-2xl p-3 flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-white">10: 30 - 12:00</p>
                <p className="font-medium text-white">
                  Technical English for Beginners
                </p>
                <p className="w-16 p-1 text-xs font-medium text-center text-blue-700 bg-blue-100 rounded-lg">
                  Beginner
                </p>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-8 h-8 bg-center bg-cover rounded-full"
                  style={{
                    backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s'})`
                  }}
                ></div>
                <div>
                  <p className="text-xs text-white">Kristin Watson</p>
                  <p className="text-xs text-white">Mentor</p>
                </div>
              </div>
            </div>
            <div className="bg-[#f7f8fa] h-full w-1/3 rounded-2xl p-3 flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-neutral-400">10: 30 - 12:00</p>
                <p className="font-medium">Technical English for Beginners</p>
                <p className="w-16 p-1 text-xs font-medium text-center text-blue-700 bg-blue-200 rounded-lg">
                  Beginner
                </p>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-8 h-8 bg-center bg-cover rounded-full"
                  style={{
                    backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s'})`
                  }}
                ></div>
                <div>
                  <p className="text-xs">Kristin Watson</p>
                  <p className="text-xs text-neutral-400">Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardAdmin
