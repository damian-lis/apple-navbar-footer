import { Container, Aside, Fill } from './styles';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Aside = function HeaderAside({ children, ...restProps }) {
  return <Aside {...restProps}>{children}</Aside>;
};

Header.Fill = function HeaderFill({ children, ...restProps }) {
  return <Fill {...restProps}>{children}</Fill>;
};
