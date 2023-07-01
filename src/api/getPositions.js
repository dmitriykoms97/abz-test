import axios from 'axios';
import { BASE_URL } from './constants';

export default () => {
    return axios.get(`${BASE_URL}/positions`)
        .then(response => {
            return response.data.positions;
        })
        .catch(error => {
            console.log('error: ', error);
        })
}