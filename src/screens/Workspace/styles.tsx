import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  padding: ${theme.size.lg};

  display: grid;
  gap: ${theme.size.lg};
`;

export const ShortcutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
`;

export const WelcomeText = styled.div`
  position: absolute;
  right: 0;
  margin-right: ${theme.size.xxlg};
`;
