// UI
import { theme } from '../../../styles/theme';
import { ContainerButton } from './styles';

// TYPES
import { IIconButton } from './utils/types';

export const IconButton = ({
  labelPos = 'left',
  label,
  Icon,
  size = 38,
  gap = theme.size.xxsm,
  color = theme.color.gray4,
  bgColor = theme.color.primary,
  selected,
  onClick,
  className,
}: IIconButton) => (
  <ContainerButton
    labelPos={labelPos}
    selected={selected}
    gap={gap}
    color={color}
    onClick={() => {
      onClick();
    }}
  >
    <Icon color={bgColor} size={size} />
    <p className={className}>{label}</p>
  </ContainerButton>
);
