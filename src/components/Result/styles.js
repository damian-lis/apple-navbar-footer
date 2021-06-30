import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { mainContainerAnimation } from './animations';
import { tabletBp } from 'helpers';

export const Wrapper = styled.div``;
export const Category = styled.div``;
export const Header = styled.h3``;
export const List = styled.ul``;
export const Item = styled.li``;
export const Link = styled(RouterLink)``;
export const Icon = styled.i``;
export const MobileNav = styled.nav``;
export const MobileList = styled.ul``;
export const MobileItem = styled.li``;
export const MobileLink = styled(RouterLink)``;

export const Container = styled.section`
  ${mainContainerAnimation};
  height: 0;
  max-height: 70%;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  opacity: 0;
  overflow: hidden;

  ${Header} {
    padding-top: 20px;
    padding-bottom: 5px;
    font-size: 12px;
    font-weight: 300;
    color: grey;
  }

  ${List} {
    padding-bottom: 10px;
  }

  ${Item} {
    display: flex;
    align-items: center;
    height: 40px;
    cursor: pointer;
  }

  ${Link} {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-left: 20px;
    font-size: 14px;
    color: black;

    &:hover {
      background-color: #f5f5f0;
    }
  }

  ${Icon} {
    padding-right: 5px;
  }

  ${MobileNav} {
    display: none;
  }

  @media (max-width: ${tabletBp}) {
    height: auto;
    width: 100%;
    padding: 0;
    background-color: transparent;
    opacity: 1;
    display: block;
    visibility: visible;
    animation: none;

    ${Wrapper} {
      display: block;
      visibility: ${({ inputClick }) => (inputClick ? 'visible' : 'hidden')};
      height: 100%;
    }

    ${Header} {
      margin-bottom: 10px;
      padding-left: 5%;

      &:nth-child(2) {
        border-top: 1px solid #1e1e1e;
      }
    }

    ${Item} {
      height: 40px;
      width: 85%;
      margin: 0 auto;
      border-bottom: 1px solid #1e1e1e;
      cursor: pointer;

      &:last-of-type {
        border-bottom: none;
      }
    }

    ${Link} {
      padding-left: 0;
      font-size: 14px;
      color: #808080;

      &:hover {
        background-color: transparent;
        color: #2997ff;
      }
    }

    ${MobileNav} {
      display: block;
      height: ${({ inputClick }) => (inputClick ? '0' : 'auto')};
      width: 85%;
      margin: 0 auto;
      padding: 5px 0 0 0;
      overflow: hidden;
      visibility: visible;
    }

    ${MobileItem} {
      height: 44px;
      margin: 0;
      border-bottom: 1px solid #1e1e1e;
      cursor: pointer;

      &:last-of-type {
        border-bottom: none;
      }
    }

    ${MobileLink} {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      font-size: 17px;
      color: white;
    }
  }
`;
