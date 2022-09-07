// UI
import { FaNewspaper, FaDesktop } from 'react-icons/fa';
import { AnimatedLetter } from '../../components/AnimatedLetter';
import { IconButton } from '../../components/Buttons/IconButton';
import * as Style from './styles';
import { aboutModal } from './utils/modals/About';

// MODALS

export const Workspace = () => {
  const { AboutModal, modalAboutIsOpen, toggleModalAbout } = aboutModal();

  return (
    <Style.Container>
      {modalAboutIsOpen && <AboutModal />}
      <Style.ShortcutContainer>
        <IconButton
          Icon={FaNewspaper}
          label="Documentos"
          labelPos="bottom"
          onClick={() => {
            alert('Projetos');
          }}
        />
      </Style.ShortcutContainer>

      <Style.ShortcutContainer>
        <IconButton
          Icon={FaDesktop}
          label="Sobre"
          labelPos="bottom"
          onClick={() => {
            toggleModalAbout();
          }}
        />
      </Style.ShortcutContainer>

      <Style.WelcomeText>
        <AnimatedLetter text="Olá, seja bem vindo!" />
      </Style.WelcomeText>
    </Style.Container>
  );
};
