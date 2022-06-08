import axios from 'axios';
const url = 'https://birdie-test-hk.herokuapp.com/observation';

export const fetchObservations = () => axios.get(url);
