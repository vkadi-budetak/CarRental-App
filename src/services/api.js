import axios from 'axios';

const advertsInstance = axios.create({
  baseURL: 'https://65d103c4ab7beba3d5e401b3.mockapi.io/api/',
});

//--------------------Adverts---------------------

export const requestAdverts = async (params) => {
  for (const key in params) {
    if (!params[key]) {
      delete params[key];
    }
  }

  const searchParams = new URLSearchParams(params);

  const { data } = await advertsInstance.get('/adverts', {params: searchParams});
  return data;
};