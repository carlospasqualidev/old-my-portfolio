/* eslint-disable @typescript-eslint/no-explicit-any */
// LIBS
import { useState } from 'react';

// ICONS
import { FaRegWindowClose } from 'react-icons/fa';

import * as Style from './styles';

// TYPES
import { theme } from '../../styles/theme';
import { IconButton } from '../Buttons/IconButton';

export const ModalComponent = () => {
  const [modalIsOpen, setOpenModal] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);

  const toggleModal = () => {
    if (modalIsOpen) {
      setAnimation(false);
      setTimeout(() => {
        setOpenModal(!modalIsOpen);
      }, 250);
    } else {
      setAnimation(true);
      setOpenModal(true);
    }
  };

  const Modal = ({
    children,
    title,
    Icon,
    size = 'md',
  }: {
    children: JSX.Element;
    title: string;
    Icon: any;
    size?: 'md' | 'lg';
  }) => (
    <Style.Background
      id="background"
      animation={animation}
      onMouseDown={(evt: any) => {
        if (evt.target.id === 'background') toggleModal();
      }}
    >
      <Style.Body animation={animation} size={size}>
        <Style.Header>
          <Icon size={24} />
          <Style.TitleContainer>
            <h2>{title}</h2>
          </Style.TitleContainer>

          <IconButton
            Icon={FaRegWindowClose}
            size={24}
            color={theme.color.primaryLL}
            bgColor={theme.color.primaryLL}
            onClick={() => {
              toggleModal();
            }}
          />
        </Style.Header>

        <Style.BodyContent>{children}</Style.BodyContent>
      </Style.Body>
    </Style.Background>
  );

  return {
    Modal,
    modalIsOpen,
    toggleModal,
  };
};
