import React from 'react';
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { alertMsg, clearAlertMsg, setAlertStatus } from './alertSlice';

const CustomAlert = ({ open }: any) => {
  const dispatch = useAppDispatch();
  const msg = useAppSelector(alertMsg);

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
                dispatch(setAlertStatus(false));
                dispatch(clearAlertMsg());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
                    )}
          variant="filled"
          severity="error"
        >
          {msg}
        </Alert>
      </Collapse>
    </div>
  );
};

export default CustomAlert;
