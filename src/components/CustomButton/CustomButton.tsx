import React, { useEffect } from 'react';
import { Button } from '@mui/material';

const CustomButton = () => {
  useEffect(() => {
    console.log('asd');
  }, []);

  return (
    <Button variant="outlined" className="_custom-button" type="submit">
      PRETRAZI
    </Button>
  );
};

export default CustomButton;
