import axios from "axios";

export const getWeatherData = (city) => dispatch => {
    const API_KEY="c378c988a41c0d1e5eea9ef6e88ef6a6"
    // const API_KEY = "e5ced403947117877134523bd0915d32\n"
//   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=berlin,de&appid=${API_KEY}&units=metric`).then(res =>
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},de&appid=${API_KEY}&units=metric`).then(res =>
    dispatch({
      type: "GET_WEATHER",
      payload: res.data
    })
  );
};
