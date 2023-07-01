import axios from 'axios';
import { BASE_URL } from './constants';

export default (page = 1, count = 6) => {
    return axios.get(`${BASE_URL}/users?page=${page}&count=${count}`)
        .then(response => {
            console.log('response users: ', response);
            return response.data;
        })
        .catch(error => {
            console.log('error: ', error);
        })
}