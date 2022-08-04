import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ text, handleFunction, disabled }: any) => (
  <Button
    variant="outlined"
    className="_custom-button"
    type="submit"
    onClick={handleFunction}
    disabled={disabled}
  >
    {text}
  </Button>
);

export default CustomButton;
