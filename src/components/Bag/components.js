import React from 'react';

import {
  Container,
  Caret,
  Content,
  Message,
  Navigation,
  List,
  ListItem,
  Link,
  Icon
} from './styles';

export default function Bag({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Bag.Caret = function BagCaret({ ...restProps }) {
  return <Caret {...restProps} />;
};

Bag.Content = function BagContent({ children, contentRef, ...restProps }) {
  return (
    <Content ref={contentRef} {...restProps}>
      {children}
    </Content>
  );
};

Bag.Message = function BagMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>;
};

Bag.Navigation = function BagNavigation({ children, ...restProps }) {
  return <Navigation {...restProps}>{children}</Navigation>;
};

Bag.List = function BagList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Bag.ListItem = function BagList({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Bag.Link = function BagLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Bag.Icon = function BagIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};
