import React, { useContext } from 'react';
import {
  HeaderComponent,
  BagComponent,
  SearchComponent,
  CurtainComponent,
  ResultComponent,
  NavigationComponent
} from 'components';
import { HeaderContext, CurtainContext } from 'contexts';

const HeaderContainer = ({ navItems, navIcons, bagItems, resultItems, ...restProps }) => {
  const { bagOpen } = useContext(HeaderContext.store);
  const { curtain } = useContext(CurtainContext.store);

  return (
    <>
      <CurtainComponent active={curtain} />
      <HeaderComponent
        Navigation={<NavigationComponent navItems={navItems} navIcons={navIcons} />}
        {...restProps}>
        {bagOpen && <BagComponent bagItems={bagItems} />}
        <SearchComponent navIcons={navIcons}>
          <ResultComponent resultItems={resultItems} navItems={navItems} />
        </SearchComponent>
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
