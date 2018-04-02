function isLogin() {
    return ((typeof(localStorage.getItem('token')) !== 'undefined' && localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null));
};


export default isLogin;