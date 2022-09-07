import styled from 'styled-components';

export const ContainerButton = styled.div<{
  labelPos?: string;
  selected?: boolean;
  gap?: string;
  color?: string;
}>`
  display: flex;
  position: relative;
  width: fit-content;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;

  transition: 0.25s;

  :hover {
    transform: scale(1.25);
    opacity: 1;
  }

  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ selected }) => selected && ' opacity: 1; '}
  ${({ labelPos }) => labelPos === 'top' && 'flex-direction:column-reverse;'}
  ${({ labelPos }) => labelPos === 'right' && 'flex-direction: row;'}
  ${({ labelPos }) => labelPos === 'left' && 'flex-direction: row-reverse;'}
  ${({ labelPos }) => labelPos === 'bottom' && 'flex-direction: column;'}
`;
