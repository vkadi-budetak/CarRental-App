import axios from 'axios';

const advertsInstance = axios.create({
  baseURL: 'https://65d103c4ab7beba3d5e401b3.mockapi.io/api/',
});

//--------------------Adverts---------------------

export const requestAdverts = async () => {
  const params = new URLSearchParams();
  params.append('limit', 12);
  params.append('page', 1);

  const { data } = await advertsInstance.get('/adverts', {params});
  return data;
};