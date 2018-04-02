import {matchPath} from 'react-router';

export default class UrlGenerator {
    constructor(router) {
        this.router = router;
    }

    to(routeName, params = null) {
        let route = this.router.findRoute(routeName);

        if (!route) {
            return null;
        }

        return params ? this.bindParamsToUrl(route.path, params) : route.path;
    }

    bindParamsToUrl(url, params) {
        Object.keys(params).forEach(key => url = url.replace(':' + key, params[key]));

        return url;
    }

    location() {
        return this.router.location;
    }

    isCurrent(path, options = {}) {
        options = options === true ? {exact: true} : options;

        return this.router.location ? !!matchPath(this.router.location.pathname, {...options, path}) : false;
    }
}