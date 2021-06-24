import { Container, Navigation, List, ListItem, Icon, Link, Aside } from './styles';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Navigation = function HeaderNavigation({ children, ...restProps }) {
  return <Navigation {...restProps}>{children}</Navigation>;
};

Header.List = function HeaderList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Header.ListItem = function HeaderListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Header.Icon = function HeaderIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Aside = function HeaderAside({ children, ...restProps }) {
  return <Aside {...restProps}>{children}</Aside>;
};
