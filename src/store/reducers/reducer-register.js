import { Actions } from './../actions/register-action';

const countriesReducer = (state = [], action) => {
    switch (action.type) {
      case Actions.GET_COUNTRIES:
        return action.payload;
        //return [...state, action.payload ];     
      default:
        return state;
    }
};

export default countriesReducer;