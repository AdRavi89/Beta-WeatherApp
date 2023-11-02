async function checkWeather(city) {
    const api_key = "fe9eee94c103d76e7ffa85dead7939d8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then((response)); {
        response.json;
    }
}
