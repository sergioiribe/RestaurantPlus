import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Registrar los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend)

const CircularChart = () => {
  // Datos dinámicos
  const pedidos = [
    {
      label: 'Nagasaki',
      valor: 80,
      tope: 100,
      color: '#6e34ff',
      cutout: '60%',
      radius: '90%'
    },
    {
      label: 'Bomba',
      valor: 60,
      tope: 100,
      color: '#47c883',
      cutout: '60%',
      radius: '80%'
    },
    {
      label: 'Tokio',
      valor: 40,
      tope: 100,
      color: '#ff771f',
      cutout: '60%',
      radius: '70%'
    }
  ]

  const datasets = pedidos.map((pedido) => ({
    label: pedido.label,
    data: [pedido.valor, pedido.tope - pedido.valor], // Progreso y restante
    backgroundColor: [pedido.color, 'transparent'], // Color y parte invisible
    borderWidth: 0,
    borderRadius: 10, // Añade esquinas redondeadas
    cutout: pedido.cutout, // Tamaño del agujero interno
    radius: pedido.radius // Radio del círculo
  }))

  const data = {
    labels: pedidos.map((pedido) => pedido.label), // Etiquetas opcionales
    datasets: datasets
  }

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const index = tooltipItem.datasetIndex
            const pedido = pedidos[index]
            return `${pedido.label}: ${pedido.valor}/${pedido.tope}`
          }
        }
      },
      legend: {
        display: false // Oculta la leyenda si no es necesaria
      }
    },
    maintainAspectRatio: false // Evita deformaciones
  }

  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col justify-around">
        {pedidos.map((pedido, index) => (
          <div key={index} className="flex items-center mb-2">
            <div
              className="p-1 px-2 text-center rounded-full min-w-24"
              style={{ backgroundColor: pedido.color }}
            >
              <p className="font-medium text-white">{`${pedido.label}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: '200px', height: '190px' }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}

export default CircularChart
