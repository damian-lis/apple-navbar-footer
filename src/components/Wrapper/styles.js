import styled from 'styled-components/macro';
import { tabletBp } from 'helpers';

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
