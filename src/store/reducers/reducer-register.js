import { Actions } from './../actions/register-action';

const countriesReducer = (state = [], action) => {
    switch (action.type) {
      case Actions.GET_COUNTRIES:
        return action.payload;
        //return {...state, countries:[...state, action.payload]};
      case Actions.REGISTRATION_SAVE:
        //return action.payload;      
        //return [...state, action.payload ];
        return {...state, articles:[...state.articles, action.payload]};
      default:
        return state;
    }
};

export default countriesReducer;