import styled from 'styled-components/macro';

const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: ${({ theme: { general } }) => general.wrapperMaxWidth};
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${tabletBp}) {
    ${({ form }) => form && 'padding: 0 50px'};
  }
`;
