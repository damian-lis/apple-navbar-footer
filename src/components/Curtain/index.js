import React from 'react';
import { Container } from './styles';

const CurtainComponent = ({ ...restProps }) => {
  return <Container {...restProps} />;
};

export default CurtainComponent;
