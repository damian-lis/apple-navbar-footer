import React, { useEffect, useRef, useContext } from 'react';
import { WrapperComponent } from 'components';
import Bag from './components';
import { HeaderContext } from 'contexts';
import { setAreaListener } from 'helpers';

const BagComponent = ({ bagItems, ...restProps }) => {
  const { setBagOpen } = useContext(HeaderContext.store);
  const contentRef = useRef();

  const handleClick = () => {
    setBagOpen(false);
  };

  useEffect(() => setAreaListener(contentRef, [setBagOpen]));

  return (
    <>
      <WrapperComponent>
        <Bag.Caret />
      </WrapperComponent>
      <Bag {...restProps}>
        <Bag.Content contentRef={contentRef}>
          <Bag.Message>Twoja torba jest pusta</Bag.Message>
          <Bag.Navigation>
            <Bag.List>
              {bagItems.map((bagItem) => (
                <Bag.ListItem key={bagItem.icon}>
                  <Bag.Icon className={bagItem.icon} />
                  <Bag.Link onClick={handleClick} to={bagItem.linkTo}>
                    {bagItem.name}
                  </Bag.Link>
                </Bag.ListItem>
              ))}
            </Bag.List>
          </Bag.Navigation>
        </Bag.Content>
      </Bag>
    </>
  );
};

export default BagComponent;
