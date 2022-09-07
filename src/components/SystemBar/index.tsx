// LIBS
import React from 'react';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import { FaTh, FaCogs } from 'react-icons/fa';
import { IconButton } from '../Buttons/IconButton';
import { modalConfig } from './utils/ModalConfig';

// TYPES
import { IBottomBar, IBottomBarIcons } from './utils/types';

// UI
import { theme } from '../../styles/theme';
import * as Style from './styles';

export const SystemBar = ({ children }: IBottomBar) => {
  const { ModalConfig, modalConfigIsOpen, toggleModalConfig } = modalConfig();

  const icons: IBottomBarIcons[] = [
    { icon: FaTh, label: 'Desktop', url: '/home' },
    // { icon: FaUserAstronaut, label: 'About', url: '/about' },

    // { icon: FaHome, label: "Home", url: "/home" },
  ];

  const navigate = useNavigate();

  return (
    <Style.Background>
      {modalConfigIsOpen && <ModalConfig />}

      <Style.AppContent>{children}</Style.AppContent>

      <Style.BottomBarBody>
        {icons.map((element) => (
          <React.Fragment key={element.url}>
            <IconButton
              className="p7"
              Icon={element.icon}
              color={theme.color.primaryLL}
              onClick={() => {
                navigate(element.url);
              }}
              bgColor={
                window.location.pathname.startsWith(element.url)
                  ? theme.color.primaryLL
                  : theme.color.primaryLL + 66
              }
              selected={
                window.location.pathname.startsWith(element.url) && true
              }
            />
          </React.Fragment>
        ))}

        <IconButton
          className="p7"
          Icon={FaCogs}
          color={theme.color.primaryLL}
          onClick={() => {
            toggleModalConfig();
          }}
          bgColor={
            modalConfigIsOpen
              ? theme.color.primaryLL
              : theme.color.primaryLL + 66
          }
          selected={modalConfigIsOpen}
        />
      </Style.BottomBarBody>
    </Style.Background>
  );
};
