import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6e85d.firebaseio.com/'
});

export default instance;