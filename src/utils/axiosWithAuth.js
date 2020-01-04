import axios from 'axios';

// return an instance of axios with the API base url and token for performing HTTP requests

export const axiosWithAuth = () => {
    const token = "fe2a48bec17b3cc81cdb99a6836a62a1bbfb4e89dd5ba073bbcd284dd93138c0";
    return axios.create({
        baseURL: 'https://frontendtest.rivet.work/api/v1/',
        headers: {
            token: token
        }
    });
};