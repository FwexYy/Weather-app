export const COORDS_WEATHER_URL = (lat, lon) =>  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=79290fddc83d56d408eebdc255e68ff5`

export const LOCATION_WEATHER_URL = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=79290fddc83d56d408eebdc255e68ff5`;
