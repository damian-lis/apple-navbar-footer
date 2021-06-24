import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { itemShow, itemHidden } from './animations';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

export const Navigation = styled.nav`
  height: 100%;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const ListItem = styled.li`
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  cursor: pointer;

  &[datatype='hamburgerIcon'] {
    display: none;
  }
  &[datatype='hamburgerIcon'] {
    display: none;
  }
`;

export const Icon = styled.i``;

export const Link = styled(RouterLink)`
  color: white;
`;

export const Aside = styled.aside`
  height: 0;
`;

export const Container = styled.header`
  color: white;
  width: 100%;
  position: relative;
  z-index: 1000;

  background-color: ${({ theme: { header }, search }) =>
    search ? header.colors.background.main : header.colors.background.dark};
  backdrop-filter: ${({ search }) => (search ? 'none' : 'blur(10px)')};
  height: ${({ theme: { header } }) => header.height.default};

  ${ListItem} {
    opacity: ${({ search }) => (search ? '1' : '0')};
    font-size: ${({ search }) => (search ? '16px' : '0')};
    animation-name: ${({ search }) => (search ? itemHidden : itemShow)};
    &:nth-last-of-type(1) {
      animation-delay: ${({ search }) => (search ? '0.1s' : '0.8s')};
    }
    &:nth-last-of-type(2) {
      animation-delay: ${({ search }) => (search ? '0.2s' : '0.7s')};
    }
    &:nth-last-of-type(3) {
      animation-delay: ${({ search }) => (search ? '0.3s' : '0.6s')};
    }
    &:nth-last-of-type(4) {
      animation-delay: ${({ search }) => (search ? '0.4s' : '0.5s')};
    }
    &:nth-last-of-type(5) {
      animation-delay: ${({ search }) => (search ? '0.5s' : '0.4s')};
    }
    &:nth-last-of-type(6) {
      animation-delay: ${({ search }) => (search ? '0.6s' : '0.3s')};
    }
    &:nth-last-of-type(7) {
      animation-delay: ${({ search }) => (search ? '0.7s' : '0.2s')};
    }
    &:nth-last-of-type(8) {
      animation-delay: ${({ search }) => (search ? '0.8s' : '0.1s')};
    }
  }

  @media (max-width: ${tabletBp}) {
    background-color: ${({ search, theme: { header } }) =>
      search ? 'black' : header.colors.background.dark};
    height: ${({ theme: { header } }) => header.height.mobile};
    margin-top: ${({ inputClick }) => (inputClick ? '-34px' : '0')};

    ${List} {
      justify-content: space-between;
      font-size: 18px;
      visibility: visible;
    }

    ${ListItem} {
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
        transition: height 1s;
        height: ${({ search }) => (search ? '0' : 'auto')};
        overflow: hidden;
      }
    }
  }
`;
