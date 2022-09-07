import styled from 'styled-components';

export const LetterContainer = styled.div`
  display: flex;
  width: fit-content;
`;

export const Letter = styled.div`
  :hover {
    animation-name: initial;
    animation-play-state: running;
  }
  animation: jello 0.9s both;
  @keyframes jello {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;
