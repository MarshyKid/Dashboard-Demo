import '../App.css';
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Card from '../components/card';
import Table from '../components/Table';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const[timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
        const fetchdata = () => {
        setTimestamp(new Date());
    };

    fetchdata();
    const interval = setInterval(fetchdata, 5000);

    return () => clearInterval(interval);

  }, []);

  const label = ['01/08/2025', '02/08/2025', '03/08/2025', '04/08/2025', '05/08/2025', '06/08/2025', '07/08/2025'];

  const chartData = {
    labels: label,
    datasets: [
      {
        label: 'Printed Cards per Day',
        data: [50, 70, 10, 20, 40, 60, 50],
        backgroundColor: '#00afb9',
        borderRadius: 8,
      },
    ],
  };

  const lossReprintData = {
    labels: label,
    datasets: [
      {
        label: 'Rejected Cards per Day',
        data: [10, 30, 5, 15, 13, 40, 7],
        backgroundColor: '#f07167',
        borderRadius: 8,
      },
    ],
  };

  const collectedData = {
    labels: label,
    datasets: [
      {
        label: 'Collected Cards per Day',
        data: [30, 20, 10, 60, 30, 80, 40],
        backgroundColor: '#29AB87',
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: false },
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
        }
      }
    }
  };
  return (
    <div className='Outer-container'>
      <div className='App'>
        <div className='lastUpdated'>Last Updated: {timestamp.toLocaleTimeString()}</div>
        <div className='Tables'>
          <Table header={"Printed"} todaydata={50} weekdata={300} totaldata={1500} />
          <Table header={"Rejected"} todaydata={7} weekdata={120} totaldata={200} />
          <Table header={"Collected"} todaydata={40} weekdata={270} totaldata={1350} />
          <Table header={"Incident reports"} todaydata={1} weekdata={3} totaldata={8} />
        </div>
        <div className='Graph'>
          <div style={{width: '100%', flex: 1, minWidth: 0}}>
            <Card>
              <div>
                <text className='Graph-title'>Printed</text>
                <Bar data={chartData} options={options} />
              </div>
            </Card>
          </div>
          <div style={{width: '100%', flex: 1, minWidth: 0}}>
            <Card>
              <div>
                <text className='Graph-title'>Rejected</text>
                <Bar data={lossReprintData} options={options} />
              </div>
            </Card>
          </div>
        </div>
        <div className='Graph'>
          <div style={{width: '100%', flex: 1, minWidth: 0}}>
            <Card>
              <div>
                <text className='Graph-title'>Collected</text>
                <Bar data={collectedData} options={options} />
              </div>
            </Card>
          </div>
          <div style={{width: '100%', flex: 1, minWidth: 0}}>
            <Card>
              <div>
                <text className='Graph-title'>Incident reports</text>
                <Bar data={{labels: label, datasets: [{label: 'Incidents', data: [0, 1, 1, 0, 0, 0, 1], borderRadius: 8, backgroundColor: '#EEEE44'}]}} options={options} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
