import Search from './components';
import React, { useContext } from 'react';
import { HeaderContext, CurtainContext } from 'contexts';

const SearchComponent = ({ navIcons, children, ...restProps }) => {
  const { search, setSearch, keyword, setKeyword, inputClick, setInputClick } = useContext(
    HeaderContext.store
  );
  const { curtain, setCurtain } = useContext(CurtainContext.store);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(false);
    setCurtain(false);
  };

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleCloseDesktopClick = () => {
    setSearch(false);
    setKeyword('');
    setCurtain(false);
  };

  const handleCloseMobileClick = () => {
    setKeyword('');
  };

  const handleCancelMobileClick = () => {
    setInputClick(false);
    setKeyword('');
  };

  const handleInputMobileClick = () => {
    setInputClick(true);
  };

  return (
    <Search
      inputClick={inputClick}
      search={search}
      keyword={keyword}
      curtain={curtain}
      {...restProps}>
      <Search.FormContainer>
        <Search.Form onSubmit={handleSubmit}>
          <Search.ButtonSearch type="submit">
            <Search.Icon className={navIcons.searchIcon} />
          </Search.ButtonSearch>

          <Search.InputContainer>
            <Search.InputDesktop
              value={keyword}
              onChange={(e) => handleInputChange(e)}
              placeholder="Szukaj..."
            />
            <Search.InputMobile
              value={keyword}
              onClick={handleInputMobileClick}
              onChange={(e) => handleInputChange(e)}
              placeholder="Szukaj..."
            />
          </Search.InputContainer>
          <Search.ButtonContainer>
            <Search.ButtonCloseDesktop type="button" onClick={handleCloseDesktopClick}>
              <Search.Icon className={navIcons.closeIcon} />
            </Search.ButtonCloseDesktop>
            <Search.ButtonCloseMobile
              keyword={keyword}
              type="button"
              onClick={handleCloseMobileClick}>
              <Search.Icon className={navIcons.closeIcon} />
            </Search.ButtonCloseMobile>
          </Search.ButtonContainer>
        </Search.Form>

        <Search.ButtonCancelMobile onClick={handleCancelMobileClick}>
          Anuluj
        </Search.ButtonCancelMobile>
      </Search.FormContainer>
      {children}
    </Search>
  );
};

export default SearchComponent;
