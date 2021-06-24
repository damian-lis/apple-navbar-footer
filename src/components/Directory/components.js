import { Container, Column, Title, List, ListItem, Link } from './styles';

export default function Directory({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Directory.Column = function DirectoryColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Directory.Title = function DirectoryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Directory.List = function DirectoryList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Directory.ListItem = function DirectoryListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Directory.Link = function DirectoryLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
