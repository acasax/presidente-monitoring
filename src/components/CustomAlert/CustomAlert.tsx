import React, { useEffect } from 'react';
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { alertMsg, clearAlertMsg, setAlertOpenStatus } from './alertSlice';

const CustomAlert = ({ open, type }: any) => {
  const dispatch = useAppDispatch();
  const msg = useAppSelector(alertMsg);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAlertOpenStatus(false));
    }, 10000);
  }, [open]);

  return (
    <div className="_alert-container">
      <Collapse in={open}>
        <Alert
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(setAlertOpenStatus(false));
                dispatch(clearAlertMsg());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
                    )}
          variant="filled"
          severity={type}
        >
          {msg}
        </Alert>
      </Collapse>
    </div>
  );
};

export default CustomAlert;
