export const Actions = {
    REGISTRATION_SAVE: 'REGISTRATION_SAVE',
    REGISTRATION_SAVE_SUCCESS: 'REGISTRATION_SAVE_SUCCESS',
    REGISTRATION_SAVE_ERROR: 'REGISTRATION_SAVE_ERROR',
    GET_COUNTRIES: 'GET_COUNTRIES',
};

const get_Countries = payload => ({ type: Actions.GET_COUNTRIES, payload });

const url='https://restcountries.eu/rest/v2/all';

export const getCountries = payload =>{

    return dispatch =>{

        //activar en el estado un indicador de busqueda de datos
        //dispatch(getCountries);
        
        return fetch(url).then(
            data => ( data.json())
        ).then(country_data => {
                //const forecastData = transformForecast(weather_data);
                //const forecastData = transformForecast(weather_data);                
                //modificar el estado con el resultado de la promise
                //dispatch(setForecastData({city:payload,forecastData}));
                dispatch(get_Countries);
            });
    };
};
