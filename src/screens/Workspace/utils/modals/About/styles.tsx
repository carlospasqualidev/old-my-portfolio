import styled from 'styled-components';
import { theme } from '../../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${theme.size.xsm};
  gap: ${theme.size.md};
`;

// IMAGE
export const HeaderContainer = styled.div`
  display: flex;
  border-radius: ${theme.size.md};
  background-color: ${theme.color.primary};
  gap: ${theme.size.lg};
  padding: ${theme.size.sm};

  width: 100%;
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  border-radius: ${theme.size.sm};
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: ${theme.size.md};
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${theme.size.md};
  width: 100%;
`;
