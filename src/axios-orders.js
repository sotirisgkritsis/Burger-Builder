import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8165f.firebaseio.com/'
});

export default instance;