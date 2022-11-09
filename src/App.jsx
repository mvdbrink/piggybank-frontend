import './App.css';
import logo from './logo.svg'
import Overview from './pages/overview/Overview';
import { Route, Routes, NavLink } from "react-router-dom";
import Transfer from './pages/transfer/Transfer';
import TransactionOverview from './pages/transactions-overview/Transaction-Overview';
import Protected from './components/protected/Protected';
import Settings from './pages/settings/Settings';
import { useState } from 'react';
import Login from './pages/login/Login';
import { useEffect } from 'react';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const localData = localStorage.getItem('userData');
    if (localData) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
  



  return (
    <div className="app">
      <div className="sidenav">
        <header>
          <div className="logo-container">
            <img className="logo" alt="PiggyBank logo" src={logo} />
            <span>PiggyBank</span>
          </div>
        </header>
        <nav>
          <ul>
            <li><NavLink to="/">Overzicht</NavLink></li>
            <li><NavLink to="/transactions">Transacties</NavLink></li>
            <li><NavLink to="/transfer">Overboeken</NavLink></li>
            <li><NavLink to="/settings">Instellingen</NavLink></li>
          </ul>
        </nav>
      </div>
      <main>
        <Routes>
          <Route path="/transactions" element={<Protected isLoggedIn={isLoggedIn}><TransactionOverview /></Protected>} />
          <Route path="/" element={<Protected isLoggedIn={isLoggedIn}><Overview /></Protected>}></Route>
          <Route path="/transfer" element={<Protected isLoggedIn={isLoggedIn}><Transfer /></Protected>}></Route>
          <Route path="/settings" element={<Protected isLoggedIn={isLoggedIn}><Settings /></Protected>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<div className=""><h1>Pagina niet gevonden.</h1><img src="/images/not-found.gif" alt="not-found" /></div>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
