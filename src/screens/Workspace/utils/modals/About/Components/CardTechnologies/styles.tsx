import styled from 'styled-components';
import { theme } from '../../../../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;

  gap: ${theme.size.sm};

  padding: ${theme.size.sm};
  border-radius: ${theme.size.xsm};

  background-color: ${theme.color.primary};

  transition: 0.25s;

  :hover {
    transform: translateY(-8px);
  }
`;

export const Info = styled.div`
  display: flex;
  gap: ${theme.size.xxsm};
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
