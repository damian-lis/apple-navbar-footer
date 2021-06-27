import styled from 'styled-components/macro';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

export const Container = styled.header`
  position: relative;
  height: ${({ theme: { header } }) => header.height.default};
  width: 100%;
  background-color: ${({ theme: { header }, search }) =>
    search ? header.colors.background.main : header.colors.background.dark};
  backdrop-filter: ${({ search }) => (search ? 'none' : 'blur(10px)')};
  color: white;

  @media (max-width: ${tabletBp}) {
    height: ${({ theme: { header } }) => header.height.mobile};
    margin-top: ${({ inputClick }) => (inputClick ? '-34px' : '0')};
    background-color: black;
    transition: 0.1s;
  }
`;

export const Aside = styled.aside`
  height: 0;
`;
