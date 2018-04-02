import axios from 'axios';
import loading from './loading';
import CancelToken from './CancelToken';

class ApiFactory {
    constructor(auth, url) {
        this.auth = auth;
        this.url = url;
    }

    make() {
        let cancelToken = new CancelToken();

        let api = axios.create({
            baseURL: this.url.baseUrl,
        });

        api.interceptors.request.use(config => {
            config.params = config.params || {};
            config.params.token = localStorage.getItem('token');
            config.params.lang = localStorage.getItem('i18nextLng');
            // Handle single request
            if (config.singleRequest) {
                config.cancelToken = cancelToken.create(config.method + '::' + config.url);
            }
            if (config.loading !== false) {
                loading.start();
            }

            return config;
        }, error => {
            //return Promise.reject(error.response);
        });

        api.interceptors.response.use(response => {
            loading.end();

            return response;
        }, error => {
            loading.end();
            //return Promise.reject(error.response);
        });

        return api;
    }
}

export default ApiFactory;
