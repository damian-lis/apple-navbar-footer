import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FooterContainer, HeaderContainer } from 'containers';
import { navItems, navIcons, bagItems, resultItems } from 'data/header';
import { directoryItems, legalLinks, informations } from 'data/footer';
import { collectPagePaths } from 'helpers';

function App() {
  const basicStyle = {
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  let { pageLinks, pageNames } = collectPagePaths([
    directoryItems,
    resultItems.suggestions,
    resultItems.elements,
    legalLinks,
    navItems,
    bagItems
  ]);

  return (
    <Router>
      <HeaderContainer
        navIcons={navIcons}
        navItems={navItems}
        bagItems={bagItems}
        resultItems={resultItems}
      />
      <Switch>
        <Route exact path={'/'}>
          <div style={basicStyle}>Home</div>
        </Route>
        {pageNames.map((pageName, index) => (
          <Route exact key={pageName} path={pageLinks[index]}>
            <div style={basicStyle}>{pageName}</div>
          </Route>
        ))}
      </Switch>
      <FooterContainer
        directoryItems={directoryItems}
        legalLinks={legalLinks}
        informations={informations}
      />
    </Router>
  );
}

export default App;
