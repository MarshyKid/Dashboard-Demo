import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './screens/Dashboard';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Card from './components/card';
import wacsgIcon from './assets/wacsg2025-icon.png'
import SizingTemplate from './screens/SizingTemplate';
import GovSupply from './screens/GovSupply';
import GMSData from './screens/GMSData';
function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleEnter = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      if (password == 'Johannes') {setLoginStatus(true);} else {setError('Incorrect Password');}
    }
  }
  if (loginStatus === false) return (
    <div className='Login-Container'>
      <div className='Login-Card-Container'>
        <Card>
          <div className='Login-Card'>
            <div className='Hidden-Title'>
              <div>Uniform Distribution & Accreditation Centre Dashboard</div>
              <img src={wacsgIcon} alt="wacsg icon" style={{ width: '50%'}} />
            </div>
            <div className='Login-Card-Title'>Login</div>
            <input placeholder='Password is "Johannes"' onChange={e => setPassword(e.target.value)} className='Login-input' type='password' onKeyDown={handleEnter} />
            <div className='Login-error'>{error}</div>
            <button className='Login-button' onClick={() => {if (password == 'Johannes') {setLoginStatus(true);} else {setError('Incorrect Password');};}}>LOGIN</button>
          </div>
        </Card>
      </div>
      <div className='Login-Title-Container'>
        <img src={wacsgIcon} alt="wacsg icon" style={{ width: '50%', paddingBottom: "10px"}}/>
        <div className='Login-Title'>Uniform Distribution & Accreditation Centre Dashboard</div>
      </div>
    </div>
  );

  return (
    <div className='App-container'>
      <Router>
          <NavBar />
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/SizingTemplate' element={<SizingTemplate />} />
              <Route path='/govSupply' element={<GovSupply />} />
              <Route path='/GMS' element={<GMSData />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App;
