import axios from 'axios';
const serverUrl = 'http://localhost:3000';

class userService{
    register(data){
        return axios.post(serverUrl + '/auth/register',data);
    }
    login(data){
        return axios.post(serverUrl + '/auth/login',data);
    }
}

export default userService;