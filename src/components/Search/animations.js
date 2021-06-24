import { keyframes } from 'styled-components/macro';

export const formHidden = keyframes`
  0% {
    width:100%;
    opacity:1;
  }
  50%{
      opacity:0;
  }
  }
  100%{
    width:0;
    opacity:0;
  }
`;

export const formShow = keyframes`
  0% {
   width:0;
   opacity:0;
  }

  100%{
    opacity:1;
    width:100%;
  }
`;
