import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Background = styled.div<{
  animation: boolean;
}>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 900px) {
    padding: 0;
  }

  scrollbar-width: none;
  scrollbar-color: transparent;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const Body = styled.div<{ animation: boolean; size: string }>`
  ${({ animation }) =>
    animation
      ? `animation:slide-in-blurred-bottom 0.25s cubic-bezier(.23,1.000,.32,1.000) both; @keyframes slide-in-blurred-bottom{0%{transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 100%;filter:blur(40px);opacity:0}100%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}} }`
      : `animation:slide-out-blurred-bottom 0.25s cubic-bezier(.755,.05,.855,.06) both; @keyframes slide-out-blurred-bottom{0%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}100%{transform:translateY(1000px) scaleY(2) scaleX(.2);transform-origin:50% 100%;filter:blur(40px);opacity:0}} `};

  opacity: 1;

  ${({ size }) => size === 'md' && 'width: 448px;'}
  ${({ size }) => size === 'lg' && 'width: 1024px;'}

  margin-top: ${theme.size.xxlg};

  background-color: ${theme.color.primaryD};
  border-radius: ${theme.size.xsm};
  z-index: 10;
  height: 75%;

  @media (max-width: 900px) {
    width: 100vw;
    min-height: 100vh;
    border-radius: 0px;
    overflow-y: scroll;
    margin-top: 0px;
  }

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: ${theme.color.primary};
  border-radius: ${theme.size.xsm} ${theme.size.xsm} 0px 0px;
  padding: ${theme.size.md};
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.size.xxsm};
`;

export const BodyContent = styled.div`
  overflow-y: auto;
  height: 65vh;
  width: 100%;
  padding: ${theme.size.md};
`;
