import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FooterContainer, HeaderContainer } from 'containers';
import { directoryItems, legalLinks, informations } from 'data/footer';

function App() {
  return (
    <Router>
      <HeaderContainer />
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
