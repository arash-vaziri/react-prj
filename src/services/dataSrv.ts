import environment from '@/environments/local.env';
import  axios  from 'axios';
    
export default axios.create({
    baseURL : environment.server,
    params : {
        key : environment.apiKey
    },

});


 