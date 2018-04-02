import {matchPath} from 'react-router';

export default (routes, path) => {
    let match = null;
    let route = routes.find(route => match = matchPath(path, route)) || null;

    return {route, match};
}