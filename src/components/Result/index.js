import React, { useContext } from 'react';
import Result from './components';
import { filterByKeywords } from 'helpers';
import { CurtainContext, HeaderContext } from 'contexts';

const ResultComponent = ({ resultItems, navItems, ...restProps }) => {
  const { search, setSearch, keyword, inputClick, setInputClick } = useContext(HeaderContext.store);
  const { curtain, setCurtain } = useContext(CurtainContext.store);

  const filteredItems = filterByKeywords(resultItems.items, keyword);
  const filteredSuggestions = filterByKeywords(resultItems.suggestions, keyword);

  const handleMobileClick = () => {
    setSearch(false);
    setCurtain(false);
  };

  const handleClick = () => {
    setSearch(false);
    setCurtain(false);
    setInputClick(false);
  };

  return (
    <Result
      search={search}
      curtain={curtain}
      inputClick={inputClick}
      keyword={keyword}
      {...restProps}>
      <Result.Wrapper>
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

        <Result.Category>
          <Result.Header>PODRĘCZNE ŁACZA</Result.Header>
          <Result.List>
            {filteredItems.map((item) => {
              return (
                <Result.Item key={item.name}>
                  <Result.Link to={item.to} onClick={handleClick}>
                    {item.name}
                  </Result.Link>
                </Result.Item>
              );
            })}
          </Result.List>
        </Result.Category>

        <Result.Category>
          <Result.Header>PROPONOWANE WYSZUKIWANIA</Result.Header>
          <Result.List>
            {filteredSuggestions.map((suggestion) => (
              <Result.Item key={suggestion.name}>
                <Result.Link to={suggestion.to} onClick={handleClick}>
                  <Result.Icon className="fas fa-search" />
                  {suggestion.name}
                </Result.Link>
              </Result.Item>
            ))}
          </Result.List>
        </Result.Category>
      </Result.Wrapper>
    </Result>
  );
};

export default ResultComponent;
