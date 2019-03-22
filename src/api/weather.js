import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.apixu.com/v1'
});