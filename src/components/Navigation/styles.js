import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { listItemAnimation } from './animations';
import { tabletBp } from 'helpers';

export const List = styled.ul``;
export const ListItem = styled.li``;
export const Icon = styled.i``;
export const Link = styled(RouterLink)``;

export const Container = styled.nav`
  height: 100%;
  margin: 0 auto;
  font-size: 15px;

  ${List} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  ${ListItem} {
    ${listItemAnimation};
    cursor: pointer;
    opacity: 1;
    visibility: visible;

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
