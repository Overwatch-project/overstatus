import axios from 'axios';

const overfastApi = axios.create({
  baseURL: 'https://overfast-api.tekrop.fr'
});

export default overfastApi;