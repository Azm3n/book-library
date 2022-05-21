import axios from 'axios';
import gutenBerg from '../api/gutenBerg';

export default axios.create({
    baseURL: 'https://gnikdroy.pythonanywhere.com/api',
});