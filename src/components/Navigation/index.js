import React, { useContext, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import Navigation from './components';
import { WrapperComponent } from 'components';
import { HeaderContext, CurtainContext } from 'contexts';
import { scrollTop } from 'helpers';

const NavigationComponent = ({ navItems, navIcons, ...restProps }) => {
  const {
    bagOpen,
    setBagOpen,
    search,
    setSearch,
    setKeyword,
    setInputClick,
    inputClick,
    setClickSearch
  } = useContext(HeaderContext.store);
  const { curtain, setCurtain } = useContext(CurtainContext.store);

  const windowWidth = useWindowWidth();

  const handleHamburgerClick = () => {
    setSearch(!search);
    setCurtain(!curtain);
    setClickSearch(false);
    setKeyword('');
  };

  const handleLogoClick = () => {
    scrollTop();
    setSearch(null);
    setCurtain(false);
  };

  const handleSearchClick = () => {
    setSearch(true);
    setCurtain(true);
    setClickSearch(false);
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
            <Navigation.Icon
              className={search ? navIcons.closeIcon : navIcons.hamburgerIcon}></Navigation.Icon>
          </Navigation.ListItem>
          <Navigation.ListItem datatype="logoIcon">
            <Navigation.Link to="/">
              <Navigation.Logo src={navIcons.logoIcon} onClick={handleLogoClick}></Navigation.Logo>
            </Navigation.Link>
          </Navigation.ListItem>
          {navItems.map((item) => (
            <Navigation.ListItem datatype="item" key={item.name}>
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
