import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from "react-chartjs-2"

ChartJS.register(   
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    scales:{
      y:{
        grid:{
          display:false
        }
      },
      x:{
        grid:{
          display:false
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

export default function BarChart({chartData}) {
    return (
        <Bar data={chartData} options={options}/>
    )
}