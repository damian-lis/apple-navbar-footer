import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

export const Title = styled.h3``;
export const List = styled.ul``;
export const ListItem = styled.li``;
export const Link = styled(RouterLink)``;

export const Container = styled.div`
  display: flex;
  padding-top: 25px;

  @media (max-width: ${tabletBp}) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  width: 25%;
  font-size: 12px;
  overflow: hidden;

  ${Title} {
    margin: 0px 20px 20px 0px;
    font-size: 12px;
    color: #1d1d1f;
  }

  ${List} {
    margin-right: 10px;
  }

  ${ListItem} {
    margin-bottom: 15px;
  }

  ${Link} {
    color: #515154;

    &:hover {
      color: #1d1d1f;
      text-decoration: underline;
    }
  }

  @media (max-width: ${tabletBp}) {
    width: 100%;

    ${Title} {
      margin: 0;
      padding: 10px 0;
      z-index: 1;

      &:hover {
        cursor: pointer;
      }
      &::after {
        display: block;
        content: '+';
        height: 10px;
        width: 10px;
        font-size: 15px;
        font-weight: 100;
        color: #1d1d1f;
        float: right;
        transition: 0.3s;
        ${({ active }) => active && 'margin-right: -3px'};
        ${({ active }) => active && 'transform: rotate(45deg)'};
      }
    }

    ${List} {
      max-height: ${({ active }) => (active ? '400px' : '0')};
      ${({ active }) => active && 'padding: 10px 0 10px;'};
      border-bottom: 1px solid rgb(210, 210, 210);
      overflow: hidden;
      transition: 0.3s;
    }

    ${Link} {
      padding: 6px 14px;
    }
  }
`;
