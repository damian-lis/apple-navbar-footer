import React from 'react';
import { DirectoryComponent, FooterComponent } from 'components';

const FooterContainer = ({ legalLinks, informations, directoryItems }) => {
  return (
    <FooterComponent legalLinks={legalLinks} informations={informations}>
      <DirectoryComponent directoryItems={directoryItems} />
    </FooterComponent>
  );
};

export default FooterContainer;
