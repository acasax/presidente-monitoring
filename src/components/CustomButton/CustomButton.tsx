import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ text, handleFunction }: any) => (
  <Button variant="outlined" className="_custom-button" type="submit" onClick={handleFunction}>
    {text}
  </Button>
);

export default CustomButton;
