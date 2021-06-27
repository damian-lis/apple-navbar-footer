import React, { useContext } from 'react';
import { Container } from './styles';
import { CurtainContext, HeaderContext } from 'contexts';

const CurtainComponent = ({ ...restProps }) => {
  const { setCurtain } = useContext(CurtainContext.store);
  const { setSearch } = useContext(HeaderContext.store);

  return (
    <Container
      onClick={() => {
        setCurtain(false);
        setSearch(false);
      }}
      {...restProps}
    />
  );
};

export default CurtainComponent;
