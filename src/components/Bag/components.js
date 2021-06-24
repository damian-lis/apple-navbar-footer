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

export default function BagView({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

BagView.BagCaret = function BagViewBagCaret({ ...restProps }) {
  return <Caret {...restProps} />;
};

BagView.Content = function BagViewContent({ children, contentRef, ...restProps }) {
  return (
    <Content ref={contentRef} {...restProps}>
      {children}
    </Content>
  );
};

BagView.Message = function BagViewMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>;
};

BagView.Navigation = function BagViewNavigation({ children, ...restProps }) {
  return <Navigation {...restProps}>{children}</Navigation>;
};

BagView.List = function BagViewList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

BagView.Icon = function BagViewIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

BagView.Link = function BagViewLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

BagView.ListItem = function BagViewList({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
