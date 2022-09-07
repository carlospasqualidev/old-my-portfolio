// UI
import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import * as Style from './styles';

// COMPONENTS
import { Image } from '../../../../../../../components/Image';

export const ContactCards = () => (
  <Style.ContactContainer>
    <Style.ImageContainer>
      <Image
        width="180px"
        height="180px"
        radius="10px"
        img="https://avatars.githubusercontent.com/u/84144449?s=400&u=0c76fe5cfac811e889325a01537d91fc63437d2e&v=4"
      />
    </Style.ImageContainer>
    <Style.RedirectContainer>
      <Style.RedirectContent
        onClick={() => {
          window.open('https://github.com/carlospasqualidev', '_blank');
        }}
      >
        <FaGithub size={22} />
        <p>@carlospasqualidev</p>
      </Style.RedirectContent>
      <Style.RedirectContent
        onClick={() => {
          window.open(
            'https://www.linkedin.com/in/carlos-pasquali-48aa49207',
            '_blank',
          );
        }}
      >
        <FaLinkedin size={22} />
        <p>@carlospasqualidev</p>
      </Style.RedirectContent>
      <Style.RedirectContent
        onClick={() => {
          window.open('https://wa.me/5548996223154', '_blank');
        }}
      >
        <FaWhatsapp size={22} />
        <p>(48) 9 9622-3154</p>
      </Style.RedirectContent>
    </Style.RedirectContainer>
  </Style.ContactContainer>
);
