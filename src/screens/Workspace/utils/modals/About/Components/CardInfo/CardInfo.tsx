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
    <Icon size={48} />
    <Style.Info>
      <p className="p1">{title}</p>
      <Hr />
      {content}
    </Style.Info>
  </Style.Container>
);
