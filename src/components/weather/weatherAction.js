import axios from "axios";

export const getWeatherData = (city) => dispatch => {
//   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=berlin,de&appid=${process.env.REACT_APP_API_KEY}&units=metric`).then(res =>
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},de&appid=${process.env.REACT_APP_API_KEY}&units=metric`).then(res =>
    dispatch({
      type: "GET_WEATHER",
      payload: res.data
    })
  );
};
