import React, { useContext } from 'react';
import Header from './components';
import { HeaderContext } from 'contexts';

const HeaderComponent = ({ children, Navigation, ...restProps }) => {
  const { search, inputClick } = useContext(HeaderContext.store);

  return (
    <Header inputClick={inputClick} search={search} {...restProps}>
      {Navigation}
      <Header.Aside>{children}</Header.Aside>
    </Header>
  );
};

export default HeaderComponent;
