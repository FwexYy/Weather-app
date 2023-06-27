import clouds from "../assets/images/clouds.png";
import clear from "../assets/images/clear.png";
import rain from "../assets/images/rain.png";
import drizzle from "../assets/images/drizzle.png";
import mist from "../assets/images/mist.png";
import snow from "../assets/images/snow.png";

export const setWeatherImage = (weather) => {
  const weathers = {
    Clouds: clouds,
    Rain: rain,
    Drizzle: drizzle,
    Mist: mist,
    Snow: snow,
    Clear: clear,
  };

  return weathers[weather];
};
