import axios from 'axios';

const $api = axios.create({
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_ENDPOINT,
});
$api.defaults.headers.get['Accept'] = 'application/json';
$api.defaults.headers.post['Accept'] = 'application/json';

export default $api;
