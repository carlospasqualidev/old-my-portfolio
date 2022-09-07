/* eslint-disable no-console */
// LIBS
import { useEffect, useState } from 'react';

// UI
import { FaDesktop, FaCode } from 'react-icons/fa';
import * as Style from './styles';
import { ContactCards } from './components/ContactCards';

// COMPONENTS
import { ModalComponent } from '../../../../../components/Modal';
import { CardInfo } from './components/CardInfo/CardInfo';
import { CardsInfo, expDate, expTime } from '../../functions';
import { AnimatedLetter } from '../../../../../components/AnimatedLetter';
import { theme } from '../../../../../styles/theme';

export const aboutModal = () => {
  const {
    Modal,
    toggleModal: toggleModalAbout,
    modalIsOpen: modalAboutIsOpen,
  } = ModalComponent();

  const AboutModal = () => {
    const [expTimeValue, setExpTimeValue] = useState('');
    const [time, setTime] = useState(0);

    const timeOut = () => {
      setTimeout(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
    };

    useEffect(() => {
      setExpTimeValue(expTime());
      timeOut();
    }, [time]);

    return (
      <Modal title="Sobre mim" size="fit-content" Icon={FaDesktop}>
        <Style.Container>
          <ContactCards />

          <Style.HeaderContent>
            <AnimatedLetter text="Carlos Pasquali" />

            <Style.AboutContainer>
              <Style.AboutGrid>
                <CardInfo
                  bgColor={theme.color.primaryD}
                  Icon={FaCode}
                  title="Full Stack há"
                  content={
                    <>
                      <p className="p2">{expDate()}</p>
                      <p className="p2">{expTimeValue}</p>
                    </>
                  }
                />
                {CardsInfo.map((info) => (
                  <CardInfo
                    bgColor={theme.color.primaryD}
                    key={info.title}
                    Icon={info.Icon}
                    title={info.title}
                    content={info.content}
                  />
                ))}
              </Style.AboutGrid>
            </Style.AboutContainer>
          </Style.HeaderContent>
        </Style.Container>
      </Modal>
    );
  };

  return {
    AboutModal,
    toggleModalAbout,
    modalAboutIsOpen,
  };
};
