import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
`;

export const Caret = styled.span`
  display: block;
  height: 12px;
  width: 12px;

  position: relative;
  top: -3px;
  left: calc(100% - 13px);

  transform: rotate(45deg);
  z-index: 2;

  border-top-left-radius: 5px;
  border-top: 1px solid black;
  border-left: 1px solid black;

  background-color: white;

  @media (max-width: 769px) {
    top: -2px;
    left: calc(100% - 15px);
    border-radius: 0;
    border: none;
    padding-right: 20px;
  }
`;

export const Content = styled.div`
  margin-left: auto;
  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  width: 280px;
  position: relative;
  top: 3px;
  padding: 0 15px 5px 15px;
  font-size: 14px;

  @media (max-width: 769px) {
    border: none;
    border-bottom: 1px solid #d3d3d3;
    border-radius: 0;
    top: 0px;
    left: 0;
    width: 100%;
    padding: 0 8% 4% 8%;
  }
`;

export const Message = styled.p`
  padding: 35px 0;
  text-align: center;
  color: #6e6e73;
`;

export const Navigation = styled.nav``;

export const List = styled.ul``;

export const ListItem = styled.li`
  border-top: 1px solid #d3d3d3;
  height: 47px;
  display: flex;
  align-items: center;
  position: relative;
  i {
    position: absolute;
    color: #06c;
    margin-right: 8px;
  }
`;

export const Link = styled(RouterLink)`
  z-index: 1;
  padding-left: 25px;
  height: 100%;
  width: 100%;
  color: #06c;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

export const Icon = styled.i``;
