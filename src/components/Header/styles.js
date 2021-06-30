import styled from 'styled-components/macro';
import { headerHeightDefault, headerHeightMobile, tabletBp } from 'helpers';

const setBackgroundColor = ({ theme: { header }, search }) =>
  search ? header.colors.background.main : header.colors.background.dark;

export const Container = styled.header`
  position: relative;
  height: ${headerHeightDefault};
  width: 100%;
  background-color: ${setBackgroundColor};
  backdrop-filter: ${({ search }) => (search ? 'none' : 'blur(10px)')};
  color: white;

  @media (max-width: ${tabletBp}) {
    height: ${headerHeightMobile};
    margin-top: ${({ inputClick }) => (inputClick ? '-34px' : '0')};
    background-color: black;
    transition: 0.1s;
  }
`;

export const Aside = styled.aside`
  height: 0;
`;
