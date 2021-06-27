import {
  Container,
  MobileNav,
  MobileList,
  MobileItem,
  MobileLink,
  Wrapper,
  Category,
  Header,
  List,
  Item,
  Link,
  Icon
} from './styles';

export default function Result({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Result.Wrapper = function ResultsWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Result.Category = function ResultsCategory({ children, ...restProps }) {
  return <Category {...restProps}>{children}</Category>;
};

Result.Header = function ResultsHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Result.List = function ResultsList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Result.Item = function ResultsItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Result.Link = function ResultsLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Result.Icon = function ResultsIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Result.MobileNav = function ResultsMobileNav({ children, ...restProps }) {
  return <MobileNav {...restProps}>{children}</MobileNav>;
};

Result.MobileList = function ResultsMobileList({ children, ...restProps }) {
  return <MobileList {...restProps}>{children}</MobileList>;
};

Result.MobileItem = function ResultsMobileItem({ children, ...restProps }) {
  return <MobileItem {...restProps}>{children}</MobileItem>;
};

Result.MobileLink = function ResultsMobileLink({ children, ...restProps }) {
  return <MobileLink {...restProps}>{children}</MobileLink>;
};
