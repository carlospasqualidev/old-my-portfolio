import styled from 'styled-components';
// TYPES
import { ImageProps } from './utils/types';

export const Img = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${({ img }) => img && ` background-image: url(${img});`}
  ${({ radius }) => radius && `border-radius:${radius};`}
  ${({ size }) =>
    size &&
    ` min-width:${size}; width: ${size}; min-height: ${size};  height: ${size};`}
  ${({ width }) => width && `min-width:${width} ; width: ${width};`}
  ${({ height }) => height && `min-height: ${height}; height: ${height};`}
`;
