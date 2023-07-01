import { SET_USERS } from '../types';

const setUsers = payload => ({
    type: SET_USERS,
    payload
});

export default setUsers;