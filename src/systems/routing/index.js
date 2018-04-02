import Router from './Router';
import UrlGenerator from './UrlGenerator';
import routes from '../../routes';

let router = new Router(routes);
let url = new UrlGenerator(router);

export {router, url};
