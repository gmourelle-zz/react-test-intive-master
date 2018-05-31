export const Actions = {
    REGISTRATION_SAVE: 'REGISTRATION_SAVE',
    REGISTRATION_SAVE_SUCCESS: 'REGISTRATION_SAVE_SUCCESS',
    REGISTRATION_SAVE_ERROR: 'REGISTRATION_SAVE_ERROR',
    GET_COUNTRIES: 'GET_COUNTRIES',
};

const get_Countries = payload => ({ type: Actions.GET_COUNTRIES, payload });
//const get_Countries = payload => ({ type: Actions.GET_COUNTRIES, payload });

const url='https://restcountries.eu/rest/v2/all';

export const getCountries = payload =>{

    return dispatch =>{
        
        return fetch(url).then(
            data => ( data.json())
        ).then(country_data => {
                          
                //modificar el estado con el resultado de la promise
              
                dispatch(get_Countries(country_data));
            });
    };
};
