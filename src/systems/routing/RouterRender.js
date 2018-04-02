import React from 'react';
import {withRouter} from 'react-router';
import {router} from './';
import RouterDispatcher from './RouterDispatcher';

class RouterRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {response: null};
        this.routerDispatcher = new RouterDispatcher(router, this.setResponse.bind(this));
    }

    componentDidMount() {
        this.dispatchRoute(this.props);
    }

    componentWillReceiveProps(props) {
        this.dispatchRoute(props);
    }

    dispatchRoute(request) {
        return this.routerDispatcher.dispatch(request);
    }

    setResponse(response) {
        this.setState({response});
    }

    render() {
        return this.state.response;
    }
}

export default withRouter(RouterRender);