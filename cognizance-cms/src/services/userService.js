import axios from 'axios';
const serverUrl = 'http://localhost:8080';

class userService {
    register(data) {
        return axios.post(serverUrl + '/auth/register', data);
    }
    login(data) {
        return axios.post(serverUrl + '/auth/login', data);
    }
    getDomains() {
        return axios.get(serverUrl + '/domain/getDomains');
    }
    addDomain(data) {
        return axios.post(serverUrl + '/domain/addDomain', data);
    }
}

const userServiceInstance = new userService();
export default userServiceInstance;