import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  gap: ${theme.size.sm};

  padding: ${theme.size.sm};
  border-radius: ${theme.size.xsm};

  transition: 0.25s;

  :hover {
    transform: translateY(-8px);
  }

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
`;

export const Info = styled.div`
  display: flex;
  gap: ${theme.size.xxsm};
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
