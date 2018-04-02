import React from 'react';
import queryString from 'query-string';
import matchRoute from './matchRoute';
import RouterRender from './RouterRender';

export default class Router {
    constructor({routes, defaultRoute, middleware = []}) {
        this.routes = this.sortRoutes(routes);
        this.defaultRoute = defaultRoute;
        this.middleware = middleware;
        this.currentRoute = null;
        this.currentMatch = null;
        this.location = null;
        this.history = null;
    }

    render() {
        return <RouterRender/>;
    }

    onRouteMatched({route, match, location, history}) {
        this.currentRoute = route;
        this.currentMatch = match;
        this.location = location;
        this.history = history;
    }

    matchRoute(path) {
        return matchRoute(this.routes, path);
    }

    findRoute(name) {
        return this.routes.find(route => route.name === name);
    }

    isCurrentRoute(routeName) {
        return this.currentRoute && this.currentRoute.name === routeName;
    }

    redirect(location) {
        this.history.push(location);
    }

    getLocationQuery() {
        return queryString.parse(this.location.search, {arrayFormat: 'bracket'});
    }

    setLocationQuery(query = {}) {
        let search = queryString.stringify(this.filterLocationQuery(query), {arrayFormat: 'bracket'});
        let location = {...this.location, search};

        this.redirect(location);
    }

    filterLocationQuery(query) {
        let result = {};

        Object.keys(query).forEach(key => {
            let value = query[key];

            if (value !== null && value !== '' && value !== []) {
                result[key] = value;
            }
        });

        return result;
    }

    sortRoutes(routes) {
        return [...routes].sort((route1, route2) => {
            return route2.path.length - route1.path.length
        });
    }
}