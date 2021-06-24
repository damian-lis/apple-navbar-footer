import React from 'react';
import Header from './components';
import { WrapperComponent } from 'components';

const HeaderComponent = ({ children, navItems, navIcons, ...restProps }) => {
  return (
    <Header {...restProps}>
      <Header.Navigation>
        <WrapperComponent>
          <Header.List>
            <Header.ListItem datatype="hamburgerIcon">
              <Header.Icon className={navIcons.hamburgerIcon}></Header.Icon>
            </Header.ListItem>
            <Header.ListItem datatype="logoIcon">
              <Header.Link to="/">
                <Header.Icon className={navIcons.logoIcon}></Header.Icon>
              </Header.Link>
            </Header.ListItem>
            {navItems.map((item, index) => (
              <Header.ListItem datatype="item" key={index}>
                <Header.Link to={item.linkTo}>{item.name}</Header.Link>
              </Header.ListItem>
            ))}
            <Header.ListItem datatype="searchIcon">
              <Header.Icon className={navIcons.searchIcon}></Header.Icon>
            </Header.ListItem>
            <Header.ListItem datatype="bagIcon">
              <Header.Icon className={navIcons.bagIcon}></Header.Icon>
            </Header.ListItem>
          </Header.List>
        </WrapperComponent>
      </Header.Navigation>
      <Header.Aside>{children}</Header.Aside>
    </Header>
  );
};

export default HeaderComponent;
