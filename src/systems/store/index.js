import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
//import reducers from '../../reducers'
//import sagas from '../../sagas'

let composeEnhancers = process.env.NODE_ENV === 'production' ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
composeEnhancers = composeEnhancers || compose; 

const sagaMiddleware = createSagaMiddleware();

const store = createStore(() => {}, {}, composeEnhancers(applyMiddleware(
    sagaMiddleware
)));

//sagaMiddleware.run(sagas);

const dispatch = store.dispatch;

const getState = store.getState;

export {
    store,
    dispatch,
    getState,
};