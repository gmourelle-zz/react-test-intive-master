import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../store/reducers/index';

const initialState={
    city:'Buenos Aires,ar',
};

//es para usar la herramienta de debug. no haria falta esta parte
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk))); //le pasamos el reducer como parametro
//const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //le pasamos el reducer como parametro

    const store = createStore(()=>{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //le pasamos el reducer como parametro

export default store;