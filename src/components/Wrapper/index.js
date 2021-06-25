import React from 'react';
import { Container } from './styles';

const WrapperComponent = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default WrapperComponent;
