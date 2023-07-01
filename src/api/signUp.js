import axios from 'axios';
import { BASE_URL } from './constants';
import getToken from './getToken';

export default (data) => {
    return getToken()
        .then(token => {
            const config = {
                headers: { 'Token': token }
            };
            return axios.post(`${BASE_URL}/users`, data, config)
                .then(response => {
                    console.log('response: ', response);
                    return response;
                })
                .catch(error => {
                    return error;
                })
        })
        .catch(error => {
            console.log('error: ', error);
        })
}