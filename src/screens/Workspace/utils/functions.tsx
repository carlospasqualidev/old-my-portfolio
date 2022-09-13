import {
  FaGraduationCap,
  FaRocketchat,
  FaInfoCircle,
  FaChess,
  FaLightbulb,
} from 'react-icons/fa';

import axios from 'axios';

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
    Icon: FaGraduationCap,
    title: 'Acadêmico',
    content: (
      <>
        <p className="p2">Engenharia da computação</p>
        <p className="p2">UNISATC</p>
      </>
    ),
  },
  {
    Icon: FaRocketchat,
    title: 'Conhecimento',
    content: (
      <>
        <p className="p2">Quer ajuda ?</p>
        <p className="p2">adoraria ouvir sua opniao</p>
      </>
    ),
  },
  {
    Icon: FaInfoCircle,
    title: 'Comunicativo',
    content: (
      <>
        <p className="p2">O obvio tem que</p>
        <p className="p2">dito nao e mesmo ?</p>
      </>
    ),
  },
  {
    Icon: FaLightbulb,
    title: 'Curioso',
    content: (
      <>
        <p className="p2">Como isso funciona?</p>
        <p className="p2"> vou descobrir!</p>
      </>
    ),
  },
  {
    Icon: FaChess,
    title: 'Perfecionista',
    content: (
      <>
        <p className="p2">Qual sera a melhor</p>
        <p className="p2"> forma de fazer isso ?</p>
      </>
    ),
  },
];

export const RequestPersonalProjects = async ({
  setProjects,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setProjects: any;
}) => {
  axios
    .get('https://api.github.com/users/carlospasqualidev/repos')
    .then((res) => {
      setProjects(res.data);
    });
};
