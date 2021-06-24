import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: ${({ theme: { general } }) => general.wrapperMaxWidth};
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 734px) {
    ${({ form }) => form && 'padding: 0 50px'};
  }
`;
