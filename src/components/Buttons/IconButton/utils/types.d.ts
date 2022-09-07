export interface IIconButton {
  Icon: any;
  gap?: string;
  color?: string;
  size?: number;
  bgColor?: string;
  label?: string;
  className?: string;
  labelPos?: string;
  selected?: boolean;
  onClick: () => void;
}
