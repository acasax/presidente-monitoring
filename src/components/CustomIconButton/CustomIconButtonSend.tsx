import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import SendIcon from '@mui/icons-material/Send';
import { SendExcelWithTransaction } from '../../feautures/main/MainService';
import { useAppSelector } from '../../store/hooks';
import { getToken } from '../../feautures/auth/authSlice';
import { useLoading } from '../../hooks/UseLoading';

const CustomIconButtonSend = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const token = useAppSelector(getToken);
  const {
    setLoading,
    resetLoading,
  } = useLoading();

  const handleCapture = ({ target }: any) => {
    console.log(target.files[0]);
    setSelectedFile(target.files[0]);
  };

  const handleSubmit = async () => {
    console.log(selectedFile);
    setLoading();
    const form = new FormData();
    form.append('file', selectedFile);
    console.log(Object.fromEntries(form));
    try {
      const res = await SendExcelWithTransaction(form, {}, token);
      console.log('res', res);
    } catch (e) {
      console.log(e);
    } finally {
      resetLoading();
    }
    // const res = await SendExcelWithTransaction(selectedFile, {}, token);
    // console.log('res', res);
  };

  return (
    <div className="_icon-button-container">

      <div className="_text-container">
        <p className="_text">
          {selectedFile ? selectedFile.name : 'Izaberi fajl'}
        </p>
      </div>
      <div className="_icon-container">
        {
                    !selectedFile ? (
                      <Tooltip title="Izaberi fajl">
                        <IconButton
                          color="primary"
                          aria-label="Izaberi fajl"
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
                      <Tooltip title="Posalji na server">
                        <IconButton
                          color="primary"
                          aria-label="Posalji na server"
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
