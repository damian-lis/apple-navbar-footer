import React, { useContext } from 'react';
import { Container } from './styles';
import { CurtainContext, HeaderContext } from 'contexts';
import { bodyOverflow } from 'helpers';

const CurtainComponent = ({ ...restProps }) => {
  const { setCurtain } = useContext(CurtainContext.store);
  const { setSearch, search } = useContext(HeaderContext.store);

  bodyOverflow(search);

  const handleClick = () => {
    setCurtain(false);
    setSearch(false);
  };

  return <Container onClick={handleClick} {...restProps} />;
};

export default CurtainComponent;
