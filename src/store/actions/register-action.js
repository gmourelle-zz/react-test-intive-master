export const Actions = {
    REGISTRATION_SAVE: 'REGISTRATION_SAVE',
    REGISTRATION_SAVE_SUCCESS: 'REGISTRATION_SAVE_SUCCESS',
    REGISTRATION_SAVE_ERROR: 'REGISTRATION_SAVE_ERROR',
    GET_COUNTRIES: 'GET_COUNTRIES',
};
  
const url='https://restcountries.eu/rest/v2/all';

export function getCountries(){

    return dispatch =>{

        return dispatch({
            type: Actions.GET_COUNTRIES,
            promise: fetch("https://restcountries.eu/rest/v2/all")
          })
    }
}

export const getCountries = payload =>{

    return dispatch =>{

        //activar en el estado un indicador de busqueda de datos
        dispatch({type: GET_COUNTRIES, payload});
        
        return fetch(url).then(
            data => ( data.json())
        ).then(country_data => {
                const forecastData = transformForecast(weather_data);
                //modificar el estado con el resultado de la promise
                dispatch(setForecastData({city:payload,forecastData}));
            });
    };
};