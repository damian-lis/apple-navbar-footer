import { Container, List, ListItem, Icon, Link, Logo } from './styles';

export default function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navigation.List = function HeaderList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Navigation.ListItem = function HeaderListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Navigation.Icon = function HeaderIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Navigation.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Navigation.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};
