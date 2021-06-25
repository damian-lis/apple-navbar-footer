import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

export const Caret = styled.span``;
export const Content = styled.div``;
export const Message = styled.p``;
export const Navigation = styled.nav``;
export const List = styled.ul``;
export const ListItem = styled.li``;
export const Link = styled(RouterLink)``;
export const Icon = styled.i``;

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  ${Caret} {
    position: relative;
    top: -3px;
    left: calc(100% - 13px);
    display: block;
    height: 12px;
    width: 12px;
    background-color: white;
    border-top-left-radius: 5px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    transform: rotate(45deg);
    z-index: 2;
  }

  ${Content} {
    position: relative;
    top: 3px;
    width: 280px;
    margin-left: auto;
    padding: 0 15px 5px 15px;
    background-color: white;
    border: 1px solid #d3d3d3;
    border-radius: 20px;
    font-size: 14px;
  }

  ${Message} {
    padding: 35px 0;
    text-align: center;
    color: #6e6e73;
  }

  ${ListItem} {
    position: relative;
    display: flex;
    align-items: center;
    height: 47px;
    border-top: 1px solid #d3d3d3;
  }

  ${Link} {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-left: 25px;
    color: #06c;
    z-index: 1;

    &:hover {
      text-decoration: underline;
    }
  }

  ${Icon} {
    position: absolute;
    margin-right: 8px;
    color: #06c;
  }

  @media (max-width: ${tabletBp}) {
    ${Caret} {
      top: -2px;
      left: calc(100% - 15px);
      padding-right: 20px;
      border: none;
      border-radius: 0;
    }

    ${Content} {
      top: 0px;
      left: 0;
      width: 100%;
      padding: 0 8% 4% 8%;
      border: none;
      border-bottom: 1px solid #d3d3d3;
      border-radius: 0;
    }
  }
`;
