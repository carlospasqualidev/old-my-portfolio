import { Hr } from '../../../../../../../components/Hr';
import { ICardInfo } from '../../../../types';
import * as Style from './styles';

export const CardTechnologies = ({ Icon, content, title }: ICardInfo) => (
  <Style.Container>
    <Icon size={64} />
    <Style.Info>
      <h4>{title}</h4>
      <Hr />
      {content}
    </Style.Info>
  </Style.Container>
);
