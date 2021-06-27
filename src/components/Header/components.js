import { Container, Aside } from './styles';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Aside = function HeaderAside({ children, ...restProps }) {
  return <Aside {...restProps}>{children}</Aside>;
};
