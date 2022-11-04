/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = 'affec65873ffb6e08e1d45282970f039';

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
  //HINT: Use template literals to create a url with input and an API key
   const response = await fetch(URL)
   const data = await response.json()
   showWeatherData(data)
  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
   getWeatherData(city)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  
// "weather-type"
// "temp"
// "min-temp"
// "max-temp"
// */
  const cityName = document.getElementById('city-name')
  const weatherName = document.getElementById('weather-type')
  const temp = document.getElementById('temp')
  const tempMin = document.getElementById('min-temp')
  const tempMax = document.getElementById('max-temp')
   cityName.innerHTML = weatherData.name
   weatherName.innerHTML = weatherData.weather[0].main
   temp.innerHTML = weatherData.main.temp
   tempMin.innerHTML = weatherData.main.temp_min
   tempMax.innerHTML = weatherData.main.temp_max
 
}

