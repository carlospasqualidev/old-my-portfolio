/* eslint-disable no-console */
// LIBS
import { useEffect, useState } from 'react';

// UI
import { FaDesktop, FaRegClock } from 'react-icons/fa';
import * as Style from './styles';

// COMPONENTS
import { ModalComponent } from '../../../../../components/Modal';
import { Image } from '../../../../../components/Image';
import { CardInfo } from './Components/CardInfo/CardInfo';
import { CardsInfo, expDate, expTime } from '../../functions';
import { Hr } from '../../../../../components/Hr';
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
      <Modal title="Sobre mim" size="lg" Icon={FaDesktop}>
        <Style.Container>
          <Style.HeaderContainer>
            <Style.Image>
              <Image
                width="100%"
                height="100%"
                radius="10px"
                img="https://avatars.githubusercontent.com/u/84144449?s=400&u=0c76fe5cfac811e889325a01537d91fc63437d2e&v=4"
              />
            </Style.Image>

            <CardInfo
              bgColor={theme.color.primaryD}
              Icon={FaRegClock}
              title="Full Stack há"
              content={
                <>
                  <h5>{expDate()}</h5>
                  <h5>{expTimeValue}</h5>
                </>
              }
            />
          </Style.HeaderContainer>

          <Style.AboutContainer>
            <h2>Informações</h2>

            <Style.AboutGrid>
              {CardsInfo.map((info) => (
                <CardInfo
                  key={info.title}
                  Icon={info.Icon}
                  title={info.title}
                  content={info.content}
                />
              ))}

              <CardInfo
                Icon={FaRegClock}
                title="Full Stack há"
                content={
                  <>
                    <h5>{expDate()}</h5>
                    <h5>{expTimeValue}</h5>
                  </>
                }
              />
            </Style.AboutGrid>
          </Style.AboutContainer>
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
