export const listItemAnimation = ({ search }) => {
  return `
    @keyframes itemHidden {
      0% {
        opacity: 1;
      }
      70% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        font-size: 0;
        visibility: hidden;
      }
    };
  
    @keyframes itemShow {
      0% {
        visibility: hidden;
        opacity: 0;
        font-size: 0;
      }
      70% {
        opacity: 1;
      }
      100% {
        opacity: 1;
        font-size: 15px;
        visibility: visible;
      }
    };
  
    animation: ${
      search === null ? null : search ? 'itemHidden 0.3s forwards;' : 'itemShow 0.1s forwards;'
    }
  
    font-size: ${search === null || search ? '15px' : 0};
    opacity: ${search ? 1 : 0};
  
    &:nth-last-of-type(1) {
      animation-delay: ${search ? '0.1s' : '0.8s'};
    }
    &:nth-last-of-type(2) {
      animation-delay: ${search ? '0.2s' : '0.7s'};
    }
    &:nth-last-of-type(3) {
      animation-delay: ${search ? '0.3s' : '0.6s'};
    }
    &:nth-last-of-type(4) {
      animation-delay: ${search ? '0.4s' : '0.5s'};
    }
    &:nth-last-of-type(5) {
      animation-delay: ${search ? '0.5s' : '0.4s'};
    }
    &:nth-last-of-type(6) {
      animation-delay: ${search ? '0.6s' : '0.3s'};
    }
    &:nth-last-of-type(7) {
      animation-delay: ${search ? '0.7s' : '0.2s'};
    }
    &:nth-last-of-type(8) {
      animation-delay: ${search ? '0.8s' : '0.1s'};
    }
    `;
};
