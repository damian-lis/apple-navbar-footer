export const formContainerAnimation = ({ search }) => `
  @keyframes formHidden {
    0% {
      width: 100%;
      opacity: 1;
    }
    50% {
      opacity: 0;
    }

    100% {
      width: 0;
      opacity: 0;
    }
  };

  @keyframes formShow {
    0% {
      width: 0;
      opacity: 0;
    }

    100% {
      opacity: 1;
      width: 100%;
    }
  };

  animation: ${
    search === null
      ? null
      : search
      ? 'formShow 0.3s 0.7s forwards'
      : 'formHidden 0.3s 0.1s forwards'
  }`;
