import React from 'react';
import { Wrapper } from './styles';

const WrapperComponent = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default WrapperComponent;
