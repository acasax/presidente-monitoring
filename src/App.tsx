import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import CustomAlert from './components/CustomAlert/CustomAlert';
import { useAppSelector } from './store/hooks';
import { alertOpenStatus, alertStatus } from './components/CustomAlert/alertSlice';
import SpinnerLoading from './components/SpinnerLoading/SpinnerLoading';
import { loadingStatus } from './components/SpinnerLoading/loadingSlice';
import AppContextContainer from './context';

function App() {
  const AlertOpenStatus = useAppSelector(alertOpenStatus);
  const AlertStatus = useAppSelector(alertStatus);
  const LoadingStatus = useAppSelector(loadingStatus);
  return (
    <AppContextContainer>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <CustomAlert open={AlertOpenStatus} type={AlertStatus} />
      {LoadingStatus && <SpinnerLoading />}
    </AppContextContainer>
  );
}

export default App;
