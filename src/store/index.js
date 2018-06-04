import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../store/reducers';

const initialState = {
    //registrations: [],
    countriesGuido: [],
    //currentVisitor: {}
  };  

//es para usar la herramienta de debug. no haria falta esta parte
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));