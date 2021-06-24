import { React } from 'react';
import Footer from './components';
import { WrapperComponent } from 'components';

const FooterComponent = ({ children, informations, legalLinks }) => {
  return (
    <Footer>
      <WrapperComponent>
        {children}
        <Footer.BottomSection>
          <Footer.CopyList>
            {informations.map((information) => (
              <Footer.CopyItem key={information.name}>{information.name}</Footer.CopyItem>
            ))}
          </Footer.CopyList>
          <Footer.LegalList>
            {legalLinks.map((legalLink) => (
              <Footer.LegalItem key={legalLink.name} to={legalLink.linkTo}>
                <Footer.LegalLink>{legalLink.name}</Footer.LegalLink>
              </Footer.LegalItem>
            ))}
          </Footer.LegalList>
        </Footer.BottomSection>
      </WrapperComponent>
    </Footer>
  );
};

export default FooterComponent;
