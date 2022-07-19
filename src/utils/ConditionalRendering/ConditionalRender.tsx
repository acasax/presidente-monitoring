import React, { PropsWithChildren, useEffect, useState } from 'react';

export interface IConditionalRendering extends PropsWithChildren<any> {
  condition: boolean
  placeHolder?: string
  timeout?: number
}

const ConditionalRendering = ({
  condition,
  placeHolder,
  children,
  timeout,
}: IConditionalRendering) => {
  const [state, setState] = useState(condition);

  useEffect(() => {
    let refTh: number = 0;
    if (condition) {
      setState(true);
      return;
    }
    // @ts-ignore
    refTh = setTimeout(() => {
      setState(false);
    }, timeout);
    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(refTh);
    };
  }, [condition, setState, timeout]);

  if (!state) {
    return <>{placeHolder ? <span className="opacity-2">{placeHolder}</span> : null}</>;
  }
  return (
    <>
      {children}
    </>
  );
};

ConditionalRendering.defaultProps = {
  placeHolder: '',
  timeout: 1000,
};

export default ConditionalRendering;
