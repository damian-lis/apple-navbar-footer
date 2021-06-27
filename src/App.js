import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FooterContainer, HeaderContainer } from 'containers';
import { navItems, navIcons, bagItems, resultItems } from 'data/header';
import { directoryItems, legalLinks, informations } from 'data/footer';

function App() {
  return (
    <Router>
      <HeaderContainer
        navIcons={navIcons}
        navItems={navItems}
        bagItems={bagItems}
        resultItems={resultItems}
      />
      Hello world!
      <FooterContainer
        directoryItems={directoryItems}
        legalLinks={legalLinks}
        informations={informations}
      />
    </Router>
  );
}

export default App;
