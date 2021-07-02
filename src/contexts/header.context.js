import React, { createContext, useState } from 'react';

const store = createContext();
const { Provider: HeaderProvider } = store;

function Provider({ children }) {
  const [search, setSearch] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [inputClick, setInputClick] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);

  return (
    <HeaderProvider
      value={{
        search,
        setSearch,
        keyword,
        setKeyword,
        inputClick,
        setInputClick,
        bagOpen,
        setBagOpen,
        clickSearch,
        setClickSearch
      }}>
      {children}
    </HeaderProvider>
  );
}

const HeaderContext = {
  store,
  Provider
};

export default HeaderContext;
