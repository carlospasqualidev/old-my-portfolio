// COMPONENTS
import { Img } from './styles';

// TYPES
import { ImageProps } from './utils/types';

export const Image = ({
  img,
  radius = '100%',
  size = '48px',
  width,
  height,
}: ImageProps) => (
  <Img img={img} radius={radius} size={size} width={width} height={height} />
);
