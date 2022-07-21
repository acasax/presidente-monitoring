import React, { FC, useEffect } from 'react';

const Screen: FC = (props) => {
  const { children } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <main>{children}</main>;
};

export default Screen;
