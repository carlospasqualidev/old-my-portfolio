import styled from 'styled-components';
import { theme } from '../../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  gap: ${theme.size.sm};
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

// IMAGE

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${theme.size.xsm};
  background-color: ${theme.color.primary};
  padding: ${theme.size.sm};
  gap: ${theme.size.sm};
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
  grid-gap: ${theme.size.sm};
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
