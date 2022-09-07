import styled from 'styled-components';
import { theme } from '../../../../../../../styles/theme';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size.sm};
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size.xsm};
  border-radius: ${theme.size.xsm};
  background-color: ${theme.color.primary};
  padding: ${theme.size.sm};

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const RedirectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size.xsm};
  border-radius: ${theme.size.xsm};
  background-color: ${theme.color.primary};
  padding: ${theme.size.sm};
`;

export const RedirectContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.size.xsm};

  :hover {
    cursor: pointer;
    animation: heartbeat 1.5s infinite ease-in-out both;
    @keyframes heartbeat {
      from {
        transform: scale(1);
        transform-origin: center center;
        animation-timing-function: ease-out;
      }
      10% {
        transform: scale(0.91);
        animation-timing-function: ease-in;
      }
      17% {
        transform: scale(0.98);
        animation-timing-function: ease-out;
      }
      33% {
        transform: scale(0.87);
        animation-timing-function: ease-in;
      }
      45% {
        transform: scale(1);
        animation-timing-function: ease-out;
      }
    }
  }
`;
