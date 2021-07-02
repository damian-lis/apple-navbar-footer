import React, { useContext } from 'react';
import Result from './components';
import { filterByKeywords } from 'helpers';
import { CurtainContext, HeaderContext } from 'contexts';
import { scrollTop } from 'helpers';

const ResultComponent = ({ resultItems, navItems, navIcons, ...restProps }) => {
  const { search, setSearch, keyword, inputClick, setInputClick, clickSearch, setClickSearch } =
    useContext(HeaderContext.store);
  const { curtain, setCurtain } = useContext(CurtainContext.store);

  const filteredElements = filterByKeywords(resultItems.elements, keyword);
  const filteredSuggestions = filterByKeywords(resultItems.suggestions, keyword);

  const handleMobileClick = () => {
    setSearch(false);
    setCurtain(false);
    setClickSearch(true);
    scrollTop();
  };

  const handleClick = () => {
    setSearch(false);
    setCurtain(false);
    setInputClick(false);
    setClickSearch(true);
    scrollTop();
  };

  return (
    <Result
      search={search}
      curtain={curtain}
      inputClick={inputClick}
      keyword={keyword}
      {...restProps}>
      <Result.Wrapper>
        {!clickSearch && (
          <Result.MobileNav>
            <Result.MobileList>
              {navItems.map((item) => (
                <Result.MobileItem key={item.name}>
                  <Result.MobileLink to={item.linkTo} onClick={handleMobileClick}>
                    {item.name}
                  </Result.MobileLink>
                </Result.MobileItem>
              ))}
            </Result.MobileList>
          </Result.MobileNav>
        )}

        {filteredElements.length ? (
          <Result.Category>
            <Result.Header>PODRĘCZNE ŁACZA</Result.Header>
            <Result.List>
              {filteredElements.map((element) => {
                return (
                  <Result.Item key={element.name}>
                    <Result.Link to={element.linkTo} onClick={handleClick}>
                      {element.name}
                    </Result.Link>
                  </Result.Item>
                );
              })}
            </Result.List>
          </Result.Category>
        ) : null}

        {keyword.length > 1 && filteredSuggestions.length ? (
          <Result.Category>
            <Result.Header>PROPONOWANE WYSZUKIWANIA</Result.Header>
            <Result.List>
              {filteredSuggestions.map((suggestion) => (
                <Result.Item key={suggestion.name}>
                  <Result.Link to={suggestion.linkTo} onClick={handleClick}>
                    <Result.Icon className={navIcons.searchIcon} />
                    {suggestion.name}
                  </Result.Link>
                </Result.Item>
              ))}
            </Result.List>
          </Result.Category>
        ) : null}
      </Result.Wrapper>
    </Result>
  );
};

export default ResultComponent;
