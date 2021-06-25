import React, { createContext, useState } from 'react';

const store = createContext();
const { Provider: CurtainProvider } = store;

function Provider({ children }) {
  const [curtain, setCurtain] = useState(false);

  return (
    <CurtainProvider
      value={{
        curtain,
        setCurtain
      }}>
      {children}
    </CurtainProvider>
  );
}

const CurtainContext = {
  store,
  Provider
};

export default CurtainContext;
