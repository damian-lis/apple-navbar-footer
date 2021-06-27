import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { itemShow, itemHidden } from './animations';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

export const List = styled.ul``;
export const ListItem = styled.li``;
export const Icon = styled.i``;
export const Link = styled(RouterLink)``;

export const Container = styled.nav`
  height: 100%;
  margin: 0 auto;

  ${List} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  ${ListItem} {
    font-size: ${({ search }) => (search ? '15px' : '0')};
    opacity: ${({ search }) => (search ? '1' : '0')};
    cursor: pointer;
    animation-name: ${({ search }) => (search ? itemHidden : itemShow)};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

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

    &[datatype='hamburgerIcon'] {
      display: none;
    }
    &[datatype='hamburgerIcon'] {
      display: none;
    }
  }

  ${Link} {
    color: white;
  }

  @media (max-width: ${tabletBp}) {
    ${List} {
      justify-content: space-between;
      font-size: 18px;
      visibility: visible;
    }

    ${ListItem} {
      font-size: 18px;
      animation: none;
      opacity: 1;
      z-index: 3;

      &[datatype='item'],
      &[datatype='searchIcon'] {
        display: none;
      }
      &[datatype='hamburgerIcon'] {
        display: block;
      }
      &[datatype='bagIcon'] {
        height: ${({ search }) => (search ? '0' : 'auto')};
        overflow: hidden;
      }
    }
  }
`;
