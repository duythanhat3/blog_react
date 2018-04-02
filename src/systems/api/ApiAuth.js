class ApiAuth {
    constructor(storageKey = 'token') {
        this.storageKey = storageKey;
    }

    getToken() {
        return localStorage.getItem(this.storageKey);
    }

    setToken(token) {
        localStorage.setItem(this.storageKey, token);
    }
}

export default ApiAuth;