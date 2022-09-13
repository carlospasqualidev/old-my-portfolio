// UI
import { FaNewspaper, FaDesktop, FaProjectDiagram } from 'react-icons/fa';

import { AnimatedLetter } from '../../components/AnimatedLetter';
import { IconButton } from '../../components/Buttons/IconButton';
import * as Style from './styles';

import { aboutModal } from './utils/modals/About';
import { projectsModal } from './utils/modals/Projects';

// MODALS

export const Workspace = () => {
  const { AboutModal, modalAboutIsOpen, toggleModalAbout } = aboutModal();
  const { ProjectsModal, modalProjectsIsOpen, toggleProjectsAbout } =
    projectsModal();

  return (
    <Style.Container>
      {modalAboutIsOpen && <AboutModal />}

      {modalProjectsIsOpen && <ProjectsModal />}

      <Style.ShortcutContainer>
        <IconButton
          Icon={FaNewspaper}
          label="Documentos"
          labelPos="bottom"
          onClick={() => {
            // alert('Projetos');
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
      <Style.ShortcutContainer>
        <IconButton
          Icon={FaProjectDiagram}
          label="Projetos"
          labelPos="bottom"
          onClick={() => {
            toggleProjectsAbout();
          }}
        />
      </Style.ShortcutContainer>

      <Style.WelcomeText>
        <AnimatedLetter text="Olá, " />
        <AnimatedLetter text="seja bem vindo!" />
        <AnimatedLetter text="ao meu portfolio!" />
      </Style.WelcomeText>
    </Style.Container>
  );
};
