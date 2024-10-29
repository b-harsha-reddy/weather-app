const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');

async function getWeather() {
  const city = cityInput.value;
  const apiKey = '656dcce545a04d0f88d153459242910';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      cityName.textContent = `City: ${data.location.name}`;
      temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
      description.textContent = `Condition: ${data.current.condition.text}`;
      humidity.textContent = `Humidity: ${data.current.humidity}%`;
    } else {
      cityName.textContent = 'City not found';
      temperature.textContent = '';
      description.textContent = '';
      humidity.textContent = '';
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    cityName.textContent = 'Error fetching data';
    temperature.textContent = '';
    description.textContent = '';
    humidity.textContent = '';
  }
}
