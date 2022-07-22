import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import CustomAlert from './components/CustomAlert/CustomAlert';
import { useAppSelector } from './store/hooks';
import { alertStatus } from './components/CustomAlert/alertSlice';

function App() {
  const AlertStatus = useAppSelector(alertStatus);
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <CustomAlert open={AlertStatus} />
    </>
  );
}

export default App;
