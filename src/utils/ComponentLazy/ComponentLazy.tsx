import React from 'react';
import _ from 'lodash';
import SpinnerLoading from '../../components/SpinnerLoading/SpinnerLoading';

export const slowImport = (value: any, ms = 1000): Promise<any> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(value);
  }, ms);
});

export const ComponentLazy = (props: any) => {
  const {
    component,
  } = props;
  const C = component;
  return (_.get(component, '$$typeof') === Symbol.for('react.lazy')) ? (
    <React.Suspense
      fallback={<SpinnerLoading />}
    >
      <C />
    </React.Suspense>
  ) : <C />;
};
