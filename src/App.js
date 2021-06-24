import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FooterContainer, HeaderContainer } from 'containers';
import { navItems, navIcons } from 'data/header';
import { directoryItems, legalLinks, informations } from 'data/footer';

function App() {
  return (
    <Router>
      <HeaderContainer navIcons={navIcons} navItems={navItems} />
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
