function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '___Lol___';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            const weatherInfo = document.getElementById('weatherInfo');

            if (data.cod !== 200) {
                weatherInfo.innerHTML = `<p>${data.message}</p>`;
                return;
            }

            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);

            const weatherInfo = document.getElementById('weatherInfo');

            weatherInfo.innerHTML = `
                <p>Failed to fetch weather. Please try again.</p>
            `;
        });
}


document
    .getElementById('weatherForm')
    .addEventListener('submit', showWeatherDetails);