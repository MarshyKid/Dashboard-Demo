import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BalanceChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name), // Assuming 'name' is the item name
    datasets: [
      {
        label: 'Current Balance',
        data: data.map(item => item.balance),
        backgroundColor: '#154c79',
      },
      {
        label: 'Distributed',
        data: data.map(item => item.distributed),
        backgroundColor: '#3E96F4',
        borderRadius: 5
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
            x: {
                stacked: true,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: true,
                beginAtZero: true
            }
        },
    };

  return (
    <Bar data={chartData} options={options} />
  );
};

export default BalanceChart;
