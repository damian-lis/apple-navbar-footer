import { keyframes } from 'styled-components/macro';

export const itemHidden = keyframes`
  0% {
    opacity:1;
  }
  70%{
    opacity:0;
  }
  100%{
    opacity:0;
    font-size:0;
    visibility:hidden;
  }
`;

export const itemShow = keyframes`
  0% {
    visibility:hidden;
    opacity:0;
    font-size:0;
  }
  70%{
    opacity:1;
  }
  100%{
    opacity:1;
    font-size:15px;
    visibility:visible;
  }
`;
