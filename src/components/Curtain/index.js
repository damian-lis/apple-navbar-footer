import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import { CurtainContext, HeaderContext } from 'contexts';
import { bodyOverflow } from 'helpers';

const CurtainComponent = ({ ...restProps }) => {
  const { setCurtain } = useContext(CurtainContext.store);
  const { setSearch, search } = useContext(HeaderContext.store);

  useEffect(() => bodyOverflow(search), [bodyOverflow]);

  const handleClick = () => {
    setCurtain(false);
    setSearch(false);
  };

  return <Container onClick={handleClick} {...restProps} />;
};

export default CurtainComponent;
