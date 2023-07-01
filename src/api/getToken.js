import axios from 'axios';
import { BASE_URL } from './constants';

export default () => {
    return axios.get(`${BASE_URL}/token`)
        .then(({ data }) => {
            return data.token;
        })
        .catch(error => {
            console.log('error: ', error);
        })
}