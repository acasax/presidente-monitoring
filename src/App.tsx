import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import CustomAlert from './components/CustomAlert/CustomAlert';
import { useAppSelector } from './store/hooks';
import { alertStatus } from './components/CustomAlert/alertSlice';
import SpinnerLoading from './components/SpinnerLoading/SpinnerLoading';
import { loadingStatus } from './components/SpinnerLoading/loadingSlice';

function App() {
  const AlertStatus = useAppSelector(alertStatus);
  const LoadingStatus = useAppSelector(loadingStatus);
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <CustomAlert open={AlertStatus} />
      {LoadingStatus && <SpinnerLoading />}
    </>
  );
}

export default App;
