import styled from 'styled-components';
import { theme } from '../../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.size.md};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  background-color: red;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${theme.size.xsm};
  background-color: ${theme.color.primary};
  padding: ${theme.size.sm};
  gap: ${theme.size.sm};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${theme.size.sm};
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectIcon = styled.div`
  min-width: 48px;
`;

export const ProjectsCard = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  overflow: hidden;

  gap: ${theme.size.sm};
  padding: ${theme.size.sm};
  border-radius: ${theme.size.xsm};

  transition: 0.25s;

  :hover {
    transform: translateY(-8px);
    cursor: pointer;
  }

  background-color: ${theme.color.primaryD};
`;
export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size.xxsm};
  > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
  }
`;
