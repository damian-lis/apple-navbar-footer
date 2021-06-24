import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

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

  @media (max-width: ${tabletBp}) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  margin: 0px 20px 20px 0px;
  font-size: 12px;
  color: #1d1d1f;

  @media (max-width: ${tabletBp}) {
    margin: 0;
    padding: 10px 0;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
    &::after {
      display: block;
      content: '+';
      font-size: 15px;
      font-weight: 100;
      color: #1d1d1f;
      height: 10px;
      width: 10px;
      float: right;
      ${({ active }) => active && 'margin-right: -3px'};
      ${({ active }) => active && 'transform: rotate(45deg)'};
      transition: 0.3s;
    }
  }
`;

export const List = styled.ul`
  margin-right: 10px;

  @media (max-width: ${tabletBp}) {
    ${({ active }) => active && 'padding: 10px 0 10px;'};
    max-height: ${({ active }) => (active ? '400px' : '0')};
    overflow: hidden;
    transition: 0.3s;
    border-bottom: 1px solid rgb(210, 210, 210);
  }
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
`;

export const Link = styled(RouterLink)`
  color: #515154;

  &:hover {
    color: #1d1d1f;
    text-decoration: underline;
  }

  @media (max-width: ${tabletBp}) {
    padding: 6px 14px;
  }
`;
