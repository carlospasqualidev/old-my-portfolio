/* eslint-disable no-console */
// LIBS
import { useEffect, useState } from 'react';

// UI
import { FaProjectDiagram, FaGithub } from 'react-icons/fa';
import * as Style from './styles';

// COMPONENTS
import { ModalComponent } from '../../../../../components/Modal';
import { RequestPersonalProjects } from '../../functions';
import { AnimatedLetter } from '../../../../../components/AnimatedLetter';
import { Hr } from '../../../../../components/Hr';
import { IProjectCategory, IRequestGitHubProjects } from '../../types';
import { Button } from '../../../../../components/Buttons/Button';
import { toggleCategory } from './utils/functions';

export const projectsModal = () => {
  const {
    Modal,
    toggleModal: toggleProjectsAbout,
    modalIsOpen: modalProjectsIsOpen,
  } = ModalComponent();

  const ProjectsModal = () => {
    const [projects, setProjects] = useState<IRequestGitHubProjects[] | null>(
      null,
    );
    const [selectedCategory, setSelectedCategory] = useState<IProjectCategory>({
      type: 'none',
    });

    useEffect(() => {
      RequestPersonalProjects({ setProjects });
    }, []);

    const projectCategory = () => {
      let Element = null;
      switch (selectedCategory.type) {
        case 'personal':
          Element = (
            <Style.CardContainer>
              {projects && (
                <Style.ProjectsGrid>
                  {projects.map((project) => (
                    <Style.ProjectsCard
                      key={project.name}
                      onClick={() => {
                        window.open(project.html_url, '_blank');
                      }}
                    >
                      <Style.ProjectIcon>
                        <FaGithub size={48} />
                      </Style.ProjectIcon>
                      <Style.ProjectContent>
                        <h4>{project.name}</h4>
                        <Hr />
                        <p>{project.description}</p>
                      </Style.ProjectContent>
                    </Style.ProjectsCard>
                  ))}
                </Style.ProjectsGrid>
              )}
            </Style.CardContainer>
          );
          break;

        case 'professional':
          Element = (
            <Style.CardContainer>
              <h1>Fffffffffffff</h1>
            </Style.CardContainer>
          );
          break;

        default:
          break;
      }
      return Element;
    };

    return (
      <Modal title="Sobre mim" size="lg" Icon={FaProjectDiagram}>
        <Style.Container>
          <AnimatedLetter text="Projetos pessoais" />
          <Style.ButtonsContainer>
            <Button
              label="personal"
              onClick={() => {
                toggleCategory({
                  category: 'personal',
                  selectedCategory,
                  setSelectedCategory,
                });
              }}
            />
            <Button
              label="professional"
              onClick={() => {
                toggleCategory({
                  category: 'professional',
                  selectedCategory,
                  setSelectedCategory,
                });
              }}
            />
          </Style.ButtonsContainer>

          {projectCategory()}
        </Style.Container>
      </Modal>
    );
  };

  return {
    ProjectsModal,
    toggleProjectsAbout,
    modalProjectsIsOpen,
  };
};
