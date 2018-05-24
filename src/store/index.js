import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState={
    city:'Buenos Aires,ar',
};

//es para usar la herramienta de debug. no haria falta esta parte
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk))); //le pasamos el reducer como parametro