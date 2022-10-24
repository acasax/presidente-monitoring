import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { SendExcelWithTransaction } from '../../feautures/main/MainService';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getToken } from '../../feautures/auth/authSlice';
import { useLoading } from '../../hooks/UseLoading';
import { setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../CustomAlert/alertSlice';
import { SendExcelWithAttendance } from '../../feautures/attendance/AttendanceService';
import { AlertStatus, DateTypes } from '../../utils/Constants';
import { Texts } from '../../utils/Texts';

const CustomIconButtonSend = ({ file }: any) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const token = useAppSelector(getToken);
  const {
    setLoading,
    resetLoading,
  } = useLoading();
  const dispatch = useAppDispatch();

  const handleCapture = ({ target }: any) => {
    setSelectedFile(target.files[0]);
  };

  const handleSubmit = async () => {
    setLoading();
    const form = new FormData();
    form.append('file', selectedFile);
    setLoading();
    try {
      let res;
      if (file === DateTypes.TRANSACTION) {
        res = await SendExcelWithTransaction(form, {}, token);
      }
      if (file === DateTypes.ATTENDANCE) {
        res = await SendExcelWithAttendance(form, {}, token);
      }
      dispatch(setAlertStatus(res?.status));
      dispatch(setAlertMsg(res?.message));
      dispatch(setAlertOpenStatus(true));
    } catch (e) {
      dispatch(setAlertStatus(AlertStatus.Error));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      setSelectedFile(null);
      resetLoading();
    }
  };

  const handleClearSelectedFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="_icon-button-container">
      {
                selectedFile && (
                <Tooltip title={Texts.cancel}>
                  <IconButton
                    color="primary"
                    aria-label={Texts.cancel}
                    component="label"
                    onClick={handleClearSelectedFile}
                  >
                    <CloseIcon fontSize="large" style={{ color: 'black' }} />
                  </IconButton>
                </Tooltip>
                )
            }
      <div className="_text-container">
        <p className="_text">
          {selectedFile ? selectedFile.name : Texts.importFile}
        </p>
      </div>
      <div className="_icon-container">

        {
                    !selectedFile ? (
                      <Tooltip title={Texts.importFile}>
                        <IconButton
                          color="primary"
                          aria-label={Texts.importFile}
                          component="label"
                        >
                          <input
                            hidden
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            type="file"
                            onChange={handleCapture}
                          />
                          <DriveFolderUploadIcon fontSize="large" style={{ color: 'white' }} />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip title={Texts.sendToServer}>
                        <IconButton
                          color="primary"
                          aria-label={Texts.sendToServer}
                          component="label"
                          onClick={handleSubmit}
                        >
                          <SendIcon fontSize="large" style={{ color: 'white' }} />
                        </IconButton>
                      </Tooltip>
                    )
                }
      </div>
    </div>
  );
};

export default CustomIconButtonSend;
