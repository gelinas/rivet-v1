import axios from 'axios';

export const axiosWithAuth = () => {
    const token = "fe2a48bec17b3cc81cdb99a6836a62a1bbfb4e89dd5ba073bbcd284dd93138c0";
    // return an instance of axios
    return axios.create({
        baseURL: 'https://frontendtest.rivet.work/api/v1/',
        headers: {
            Authorization: token
        }
    });
};