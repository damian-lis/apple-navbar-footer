import { React, useState } from 'react';
import Directory from './components';
import { useWindowWidth } from '@react-hook/window-size';
import theme from 'data/theme';
import { scrollTop } from 'helpers';

const DirectoryComponent = ({ directoryItems }) => {
  const [click, setClick] = useState(-1);

  const handleTitleClick = (index) => {
    if (index === click) {
      setClick(-1);
    } else {
      setClick(index);
    }
  };

  const handleLinkClick = () => {
    setClick(-1);
    scrollTop();
  };

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < theme.general.breakpoints.tablet.slice(0, 3);

  return (
    <Directory>
      {directoryItems.map((item, index) => (
        <Directory.Column active={click === index} key={item.title}>
          <Directory.Title onClick={() => isMobile && handleTitleClick(index)}>
            {item.title}
          </Directory.Title>
          <Directory.List>
            {item.links.map((link) => (
              <Directory.ListItem key={link.name}>
                <Directory.Link onClick={handleLinkClick} to={link.linkTo}>
                  {link.name}
                </Directory.Link>
              </Directory.ListItem>
            ))}
          </Directory.List>
        </Directory.Column>
      ))}
    </Directory>
  );
};

export default DirectoryComponent;
