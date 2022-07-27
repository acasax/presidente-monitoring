import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useLoading } from '../../hooks/UseLoading';
import ConditionalRendering from '../../utils/ConditionalRendering/ConditionalRender';

const SpinnerLoading = () => (
  <div className="spinner spinner-center">
    <CircularProgress color="success" />
  </div>
);

export const SpinnerLoadingCenter = () => (
  <div className="spinner-center">
    <div className="spinner-center-inner">
      <CircularProgress />
    </div>
  </div>
);

export default SpinnerLoading;

export const SpinnerLoadingTimer = () => {
  const timer = 20000;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        setOpen(false);
      }, timer);
    }
  }, [timer, setOpen]);

  return (
    <ConditionalRendering condition={open}>
      <div className="spinner-center">
        <div className="spinner-center-inner">
          <CircularProgress color="success" />
        </div>
      </div>
    </ConditionalRendering>
  );
};

export const Loading = () => {
  const { loading } = useLoading();
  return loading ? <SpinnerLoadingCenter /> : <></>;
};
