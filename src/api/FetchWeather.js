import axios from "axios";

const URL = "https://openweathermap.org/data/2.5/weather";

const FetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
export default FetchWeather;
