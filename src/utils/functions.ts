import axios from 'axios';
import { Api } from '../services/api';
import { IUploadFile } from './types';

export const DateFormatter = (date: string) =>
  new Date(date).toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function uploadFile(file: any) {
  let response = {};

  const formData = new FormData();
  formData.append('file', file[0]);

  await Api.post('upload/file', formData).then((res) => {
    response = res.data;
  });

  return response as IUploadFile;
}

export const handleError = async ({ error }: { error: Error }) => {
  if (process.env.NODE_ENV !== 'development') {
    axios.post('https://ada-logs.herokuapp.com/api/logs/create', {
      projectName: 'Sul Oxidos',
      environment: window.location.host.includes('sandbox')
        ? 'Sandbox'
        : 'Production',
      side: 'Backoffice',
      errorStack: error.stack,
    });
  }
};
