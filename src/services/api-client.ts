import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4d742c14e28b49729270a9413204e75e'
    }
})