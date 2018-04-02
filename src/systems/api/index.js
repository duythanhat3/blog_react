import ApiAuth from './ApiAuth';
import ApiUrl from './ApiUrl';
import ApiFactory from './ApiFactory';

let baseURL = typeof process.env.REACT_APP_SERVER_API_DOMAIN !== "undefined" ? (process.env.REACT_APP_SERVER_API_DOMAIN).trim() : "http://localhost:8000/";

let auth = new ApiAuth('token');
let urlTest = new ApiUrl("https://jsonplaceholder.typicode.com/", auth);
let url = new ApiUrl(baseURL);
let apiTest = (new ApiFactory(auth, urlTest)).make();
let api = (new ApiFactory(auth, url)).make();
export {
    auth,
    urlTest,
    apiTest,
    url,
    api,
};