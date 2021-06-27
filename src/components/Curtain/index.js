import React, { useContext } from 'react';
import { Container } from './styles';
import { CurtainContext, HeaderContext } from 'contexts';

const CurtainComponent = ({ ...restProps }) => {
  const { setCurtain } = useContext(CurtainContext.store);
  const { setSearch } = useContext(HeaderContext.store);

  const handleClick = () => {
    setCurtain(false);
    setSearch(false);
  };

  return <Container onClick={handleClick} {...restProps} />;
};

export default CurtainComponent;
