import { FaUserGraduate } from 'react-icons/fa';
import { ICardInfo } from './types';

export const expTime = () => {
  const today = new Date();
  const dateStart = new Date(
    new Date('01/6/2021 08:00:00').toLocaleString('pt-br'),
  );

  const hours = today.getHours() - dateStart.getHours();
  const minutes = today.getMinutes() - dateStart.getMinutes();
  const seconds = today.getSeconds() - dateStart.getSeconds();

  return `${hours < 10 ? `0${hours}` : hours}:
          ${minutes < 10 ? `0${minutes}` : minutes}:
          ${seconds < 10 ? `0${seconds}` : seconds} `;
};

export const expDate = () => {
  const today = new Date();
  const dateStart = new Date(
    new Date('01/6/2021 08:00:00').toLocaleString('pt-br'),
  );

  const years = today.getFullYear() - dateStart.getFullYear();
  const months = today.getMonth() - dateStart.getMonth() + 1; // javascript mouths start in 0
  const days = today.getDate() - 1;

  return `${years > 1 ? `${years} anos,` : `${years} ano,`}
          ${months > 1 ? `${months} meses ,` : `${months} mes ,`}
          ${days > 1 ? `${days} dias` : `${days} dia`} `;
};

export const CardsInfo: ICardInfo[] = [
  {
    Icon: FaUserGraduate,
    title: 'Acadêmico',
    content: (
      <>
        <h5>Engenharia da computação</h5>
        <h5>UNISATC</h5>
      </>
    ),
  },
];
