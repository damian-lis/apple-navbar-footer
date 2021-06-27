import { keyframes } from 'styled-components/macro';

export const resultsHidden = keyframes`
  0% {
    height:100%;
    opacity:1;



  100%{
    height:0;
    opacity:0;

  }
`;

export const resultsShow = keyframes`
  0% {
   height:0;
   opacity:0;
  }

  100%{
    opacity:1;
    height:100%;
  }
`;
