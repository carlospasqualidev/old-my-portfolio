import { Hr } from '../../../../../../../components/Hr';
import { theme } from '../../../../../../../styles/theme';
import { ICardInfo } from '../../../../types';
import * as Style from './styles';

export const CardInfo = ({
  Icon,
  content,
  title,
  bgColor = theme.color.primary,
}: ICardInfo) => (
  <Style.Container bgColor={bgColor}>
    <Icon size={64} />
    <Style.Info>
      <h4>{title}</h4>
      <Hr />
      {content}
    </Style.Info>
  </Style.Container>
);
