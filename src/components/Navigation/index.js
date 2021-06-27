import React, { useContext } from 'react';
import Navigation from './components';
import { WrapperComponent } from 'components';
import { HeaderContext, CurtainContext } from 'contexts';

const NavigationComponent = ({ navItems, navIcons, ...restProps }) => {
  const { bagOpen, setBagOpen, search, setSearch, setKeyword, inputClick } = useContext(
    HeaderContext.store
  );
  const { curtain, setCurtain } = useContext(CurtainContext.store);

  const handleHamburgerClick = () => {
    setSearch(!search);
    setCurtain(!curtain);
    setKeyword('');
  };

  const handleLogoClick = () => {
    setSearch(false);
    setCurtain(false);
  };

  const handleSearchClick = () => {
    setSearch(true);
    setCurtain(true);
    setKeyword('');
  };

  const handleBagClick = () => {
    setBagOpen(!bagOpen);
  };

  return (
    <Navigation inputClick={inputClick} search={search} {...restProps}>
      <WrapperComponent>
        <Navigation.List>
          <Navigation.ListItem datatype="hamburgerIcon" onClick={handleHamburgerClick}>
            <Navigation.Icon className={navIcons.hamburgerIcon}></Navigation.Icon>
          </Navigation.ListItem>
          <Navigation.ListItem datatype="logoIcon">
            <Navigation.Link to="/">
              <Navigation.Icon
                className={navIcons.logoIcon}
                onClick={handleLogoClick}></Navigation.Icon>
            </Navigation.Link>
          </Navigation.ListItem>
          {navItems.map((item, index) => (
            <Navigation.ListItem datatype="item" key={index}>
              <Navigation.Link to={item.linkTo}>{item.name}</Navigation.Link>
            </Navigation.ListItem>
          ))}
          <Navigation.ListItem datatype="searchIcon" onClick={handleSearchClick}>
            <Navigation.Icon className={navIcons.searchIcon}></Navigation.Icon>
          </Navigation.ListItem>
          <Navigation.ListItem datatype="bagIcon" onClick={handleBagClick}>
            <Navigation.Icon className={navIcons.bagIcon}></Navigation.Icon>
          </Navigation.ListItem>
        </Navigation.List>
      </WrapperComponent>
    </Navigation>
  );
};

export default NavigationComponent;
