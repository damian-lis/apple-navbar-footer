export const mainContainerAnimation = ({ search }) => {
  return `
    @keyframes resultsHidden {
      0% {
        height: 100%;
        opacity: 1;
      }
  
      100% {
        height: 0;
        opacity: 0;
      }
    };
  
    @keyframes resultsShow {
      0% {
        height: 0;
        opacity: 0;
      }
  
      100% {
        opacity: 1;
        height: 100%;
      }
    };
  
    animation: ${
      search === null
        ? null
        : search
        ? 'resultsShow 0.3s 0.7s forwards;'
        : 'resultsHidden 0.1s 0s forwards;'
    }
    `;
};
