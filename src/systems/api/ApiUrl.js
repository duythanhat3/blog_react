import queryString from 'query-string';

class ApiUrl {
    constructor(baseUrl, auth) {
        this.baseUrl = baseUrl;
        this.auth = auth;
    }

    to(path = '', query = {}) {
        let urlPath = path ? '/' + path : '';
        let urlQuery = Object.keys(query).length ? '?' + queryString.stringify(query) : '';

        return this.baseUrl + urlPath + urlQuery;
    }

    tokenUrl(path = '', query = {}) {
        return this.to(path, {...query, token: this.auth.getToken()});
    }
}

export default ApiUrl;