import React, { useContext } from 'react';
import { HeaderComponent, BagComponent, SearchComponent, CurtainComponent } from 'components';
import { HeaderContext, CurtainContext } from 'contexts';

const HeaderContainer = ({ navItems, navIcons, bagItems, ...restProps }) => {
  const { bagOpen, search } = useContext(HeaderContext.store);
  const { curtain } = useContext(CurtainContext.store);
  document.body.style.overflow = curtain ? 'hidden' : 'auto';

  return (
    <>
      <CurtainComponent active={curtain} />
      <HeaderComponent navItems={navItems} navIcons={navIcons} {...restProps}>
        {search && <SearchComponent navIcons={navIcons}></SearchComponent>}
        {bagOpen && <BagComponent bagItems={bagItems} />}
      </HeaderComponent>
    </>
  );
};

const HeaderContainerWrapper = ({ ...restProps }) => {
  return (
    <CurtainContext.Provider>
      <HeaderContext.Provider>
        <HeaderContainer {...restProps} />
      </HeaderContext.Provider>
    </CurtainContext.Provider>
  );
};

export default HeaderContainerWrapper;
