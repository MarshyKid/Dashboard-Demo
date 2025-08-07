import './App.css';
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBX8YYnpHoeVKnvlc02eDf2bNoNJNdqVRE",
  authDomain: "live-dashboard-2676b.firebaseapp.com",
  databaseURL: "https://live-dashboard-2676b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "live-dashboard-2676b",
  storageBucket: "live-dashboard-2676b.firebasestorage.app",
  messagingSenderId: "650512343727",
  appId: "1:650512343727:web:8005f304260cc25d32aa5a",
  measurementId: "G-ZWE1D1L38G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [counts, setCounts] = useState('');
  const [labels, setLabels] = useState('');
  const [newToday, setNewToday] = useState('');
  const [newWeek, setNewWeek] = useState('');
  const [newTotal, setNewTotal] = useState('');
  const [lostToday, setLostToday] = useState('');
  const [lostWeek, setLostWeek] = useState('');
  const [lostTotal, setLostTotal] = useState('');
  const [docs, setDocs] = useState([]);


  useEffect(() => {

    const fetchData = () => {
      fetch("https://0d2a-203-116-177-151.ngrok-free.app/api/data", {
        headers: {
          "ngrok-skip-browser-warning": "1"
        }
      })
      .then(res => res.json())
      .then(data => {
        const sortedDates = Object.keys(data.new_per_day).sort();
        console.log(sortedDates)
        const counts = sortedDates.map(date => data.new_per_day[date]);
        setLabels(sortedDates);
        setCounts(counts);

        const newToday = data.new_accred.today;
        setNewToday(newToday);

        const newWeek = data.new_accred.week_count;
        setNewWeek(newWeek);

        const newTotal = data.new_accred.total;
        setNewTotal(newTotal);

        const lostToday = data.lost.today;
        setLostToday(lostToday);

        const lostWeek = data.lost.week_count;
        setLostWeek(lostWeek);

        const lostTotal = data.lost.total;
        setLostTotal(lostTotal);
      })
      .catch(err => console.error('Fetch error:', err));
    };

    fetchData();

    const intervalID = setInterval(fetchData, 60000);

    return () => clearInterval(intervalID);
    
  }, []);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Entries per Day',
        data: counts,
        backgroundColor: 'rgba(75,192,192,0.6)'
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Daily Entry Count' },
    },
  };

  return (
    <div className="App">
      <div className='Tables'>
        <div className='Table'>
          <h3 className='Table-header'>Total New Accreditation</h3>
          <table className='Table-actual'>
            <thead>
              <tr>
                <th></th>
                <th>No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Today</td>
                <td>{newToday ? newToday : "Loading..."}</td>
              </tr>
              <tr>
                <td>This Week</td>
                <td>{newWeek ? newWeek : "Loading..."}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{newTotal ? newTotal : "Loading..."}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='Table'>
          <h3 className='Table-header'>Total Reprint/Loss of Cards</h3>
          <table className='Table-actual'>
            <thead>
              <tr>
                <th></th>
                <th>No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Today</td>
                <td>{lostToday}</td>
              </tr>
              <tr>
                <td>This Week</td>
                <td>{lostWeek}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{lostTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='Graph'>
        <h3 className='Graph-title'>New Entries Per day</h3>
        <Bar data={chartData} options={options} />
      </div>
    </div>

  );
}

export default App;
