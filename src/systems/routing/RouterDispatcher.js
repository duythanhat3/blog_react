import React from 'react';
import matchRoute from './matchRoute';
import Pipeline from '../pipeline/Pipeline';

export default class RouterDispatcher {
    constructor(router, render) {
        this.router = router;
        this.render = render;
    }

    dispatch(request) {
        request = {...request, ...this.matchRoute(request)};
        let response = this.makeResponse(request.route);

        return (new Pipeline())
            .send({request, response})
            .through(this.gatherRouteMiddleware(request.route))
            .then(data => this.render(this.makeResponseContent(data)));
    }

    matchRoute(request) {
        let {route, match} = matchRoute(this.router.routes, request.location.pathname);

        this.router.onRouteMatched({...request, route, match});

        route = route || this.router.defaultRoute;

        return {route, match};
    }

    makeResponse(route) {
        return {
            component: route ? route.component : null,
            layout: route ? route.layout : null,
            render: this.render,
        };
    }

    gatherRouteMiddleware(route) {
        return this.router.middleware.concat(route && route.middleware ? route.middleware : []);
    }

    makeResponseContent({request, response}) {
        if (!response.component) {
            return null;
        }

        let component = <response.component {...request} />;

        return response.layout ? <response.layout>{component}</response.layout> : component;
    }
}