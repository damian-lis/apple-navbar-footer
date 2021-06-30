import styled from 'styled-components/macro';

export const Container = styled.div`
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '0.3' : '0')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: black;
  transition: 0.3s;
  z-index: 0;
`;
