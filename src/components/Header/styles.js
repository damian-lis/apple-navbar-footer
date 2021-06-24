import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { itemShow } from './animations';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

export const Container = styled.header`
  position: relative;
  width: 100%;
  color: white;
  z-index: 1000;

  background-color: ${({ theme: { header } }) => header.colors.background.dark};
  height: ${({ theme: { header } }) => header.height.default};

  @media (max-width: ${tabletBp}) {
    height: ${({ theme: { header } }) => header.height.mobile};
  }
`;

export const Navigation = styled.nav`
  height: 100%;
  margin: 0 auto;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: ${tabletBp}) {
    justify-content: space-between;
    font-size: 18px;
    visibility: visible;
  }
`;
export const ListItem = styled.li`
  font-size: 0;
  animation-name: ${itemShow};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  cursor: pointer;

  &[datatype='hamburgerIcon'] {
    display: none;
  }

  &:nth-last-of-type(1) {
    animation-delay: 0.8s;
  }
  &:nth-last-of-type(2) {
    animation-delay: 0.7s;
  }
  &:nth-last-of-type(3) {
    animation-delay: 0.6s;
  }
  &:nth-last-of-type(4) {
    animation-delay: 0.5s;
  }
  &:nth-last-of-type(5) {
    animation-delay: 0.4s;
  }
  &:nth-last-of-type(6) {
    animation-delay: 0.3s;
  }
  &:nth-last-of-type(7) {
    animation-delay: 0.2s;
  }
  &:nth-last-of-type(8) {
    animation-delay: 0.1s;
  }

  @media (max-width: ${tabletBp}) {
    animation: none;
    opacity: 1;
    font-size: 18px;

    &[datatype='item'],
    &[datatype='searchIcon'] {
      display: none;
    }
    &[datatype='hamburgerIcon'] {
      display: block;
    }
    &[datatype='bagIcon'] {
      overflow: hidden;
    }
  }
`;
export const Icon = styled.i``;

export const Link = styled(RouterLink)`
  color: white;
`;

export const Aside = styled.aside`
  height: 0;
`;
