import axios from 'axios';

export const getStarWarsData = () => dispatch => {
  axios.get('https://swapi.co/api/people').then(response =>
    dispatch({
        // type is the name of the function to be used in the Reducer
      type: 'GET_STARWARS',
      payload: response.data
    })
  );
};
