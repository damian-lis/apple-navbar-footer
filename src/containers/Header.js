import React from 'react';
import { HeaderComponent } from 'components';

const HeaderContainer = ({ navItems, navIcons }) => {
  return <HeaderComponent navItems={navItems} navIcons={navIcons}></HeaderComponent>;
};

export default HeaderContainer;
