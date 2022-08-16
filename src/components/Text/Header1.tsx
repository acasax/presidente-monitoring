import React from 'react';
import { Divider } from '@mui/material';

const Header1 = ({ text }: any) => (
  <div className="_header1-text-container">
    <Divider sx={{ borderBottomWidth: 5, width: '100%' }}>
      <p className="_header1-text">{text}</p>
    </Divider>
  </div>
);

export default Header1;
