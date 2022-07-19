import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
  // const data = {
  //   username: 'presidente',
  //   password: 'presidente123',
  // };
  //
  // // eslint-disable-next-line @typescript-eslint/no-shadow
  // const handleLogin = useCallback(async (data) => {
  //   const res = await Login(data);
  //   console.log(res);
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
