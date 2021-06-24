import { React, useState } from 'react';
import Directory from './components';
import { useWindowWidth } from '@react-hook/window-size';

const DirectoryComponent = ({ directoryItems }) => {
  const [click, setClick] = useState(false);

  const onClickHandler = (index) => {
    if (index === click) {
      setClick(false);
    } else {
      setClick(index);
    }
  };

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 769;

  return (
    <Directory>
      {directoryItems.map((item, index) => (
        <Directory.Column key={directoryItems.title}>
          <Directory.Title
            active={click === index}
            onClick={() => isMobile && onClickHandler(index)}>
            {item.title}
          </Directory.Title>
          <Directory.List active={click === index}>
            {item.links.map((link) => (
              <Directory.ListItem key={link.name}>
                <Directory.Link to={link.linkTo}>{link.name}</Directory.Link>
              </Directory.ListItem>
            ))}
          </Directory.List>
        </Directory.Column>
      ))}
    </Directory>
  );
};

export default DirectoryComponent;
