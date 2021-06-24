import React, { useContext } from 'react';
import { HeaderComponent, BagComponent, SearchComponent } from 'components';
import { HeaderContext } from 'contexts';

const HeaderContainer = ({ navItems, navIcons, bagItems }) => {
  const { bagOpen, search } = useContext(HeaderContext.store);

  return (
    <HeaderComponent navItems={navItems} navIcons={navIcons}>
      {search && <SearchComponent navIcons={navIcons}></SearchComponent>}
      {bagOpen && <BagComponent bagItems={bagItems} />}
    </HeaderComponent>
  );
};

const HeaderContainerWrapper = ({ ...restProps }) => {
  return (
    <HeaderContext.Provider>
      <HeaderContainer {...restProps} />
    </HeaderContext.Provider>
  );
};

export default HeaderContainerWrapper;
