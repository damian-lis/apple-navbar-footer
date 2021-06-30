import React, { useContext, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import Navigation from './components';
import { WrapperComponent } from 'components';
import { HeaderContext, CurtainContext } from 'contexts';
import { scrollTop } from 'helpers';

const NavigationComponent = ({ navItems, navIcons, ...restProps }) => {
  const { bagOpen, setBagOpen, search, setSearch, setKeyword, setInputClick, inputClick } =
    useContext(HeaderContext.store);
  const { curtain, setCurtain } = useContext(CurtainContext.store);

  const windowWidth = useWindowWidth();

  const handleHamburgerClick = () => {
    setSearch(!search);
    setCurtain(!curtain);
    setKeyword('');
  };

  const handleLogoClick = () => {
    scrollTop();
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

  const handleLinkClick = () => {
    scrollTop();
  };

  useEffect(() => {
    setCurtain(false);
    setInputClick(false);
    setBagOpen(false);
    setSearch(null);
    setKeyword('');
  }, [windowWidth]);

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
              <Navigation.Link onClick={handleLinkClick} to={item.linkTo}>
                {item.name}
              </Navigation.Link>
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
