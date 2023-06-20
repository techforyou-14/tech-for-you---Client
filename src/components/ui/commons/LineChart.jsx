import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2"


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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
    
  }
    
  };

export default function LineChart({chartData}) {
    return (
        <Line data={chartData} options={options}/>
    )
}