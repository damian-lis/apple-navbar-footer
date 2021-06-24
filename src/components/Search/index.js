import Search from './components';
import React, { useContext, useRef, useEffect } from 'react';
import { HeaderContext } from 'contexts';
import { setAreaListener } from 'helpers';

const SearchComponent = ({ navIcons, children, ...restProps }) => {
  const searchRef = useRef();
  const { search, setSearch, keyword, setKeyword, inputClick, setInputClick } = useContext(
    HeaderContext.store
  );

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(false);
  };

  useEffect(() => setAreaListener(searchRef, [setSearch, setKeyword]));

  return (
    <Search searchRef={searchRef} search={search} keyword={keyword} {...restProps}>
      <Search.FormContainer>
        <Search.Form onSubmit={submitHandler}>
          <Search.ButtonSearch type="submit">
            <Search.Icon className={navIcons.searchIcon} />
          </Search.ButtonSearch>

          <Search.InputContainer>
            <Search.InputDesktop
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Szukaj w Leaf.com"
            />
            <Search.InputMobile
              value={keyword}
              onClick={() => setInputClick(true)}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Szukaj w Leaf.com"
            />
          </Search.InputContainer>
          <Search.ButtonContainer>
            <Search.ButtonCloseDesktop
              type="button"
              onClick={() => {
                setSearch(false);
                setKeyword('');
              }}>
              <Search.Icon className={navIcons.closeIcon} />
            </Search.ButtonCloseDesktop>
            <Search.ButtonCloseMobile
              keyword={keyword}
              type="button"
              onClick={() => setKeyword('')}>
              <Search.Icon className={navIcons.closeIcon} />
            </Search.ButtonCloseMobile>
          </Search.ButtonContainer>
        </Search.Form>

        <Search.ButtonCancelMobile
          inputClick={inputClick}
          onClick={() => {
            setInputClick(false);
            setKeyword('');
          }}>
          Anuluj
        </Search.ButtonCancelMobile>
      </Search.FormContainer>
      {children}
    </Search>
  );
};

export default SearchComponent;
