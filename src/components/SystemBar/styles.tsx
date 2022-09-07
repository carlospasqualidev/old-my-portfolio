import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  background-image: url(https://r4.wallpaperflare.com/wallpaper/135/692/935/astronaut-space-black-background-artwork-hd-wallpaper-7866ed583040dc28909c514e8812149a.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: ${theme.size.xsm};

  animation: scale-in-center 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const AppContent = styled.div`
  height: 100vh;
`;

export const BottomBarBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.size.sm};
  height: 80px;
  opacity: 0.7;

  padding: ${theme.size.sm};
  border-radius: ${theme.size.xsm};
  background-color: ${theme.color.primaryD};
`;
