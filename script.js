const apiKey = '913d28e3de168febab9f8b57dcd8b5eb'; // ключ для получения данных погоды
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const city = document.getElementById('city');
const searchButton = document.getElementById('searchButton');
const locationID = document.getElementById('location');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');


// Обработка клика и поиск города для прогноза
searchButton.addEventListener('click', () => {
    const location = city.value;
    if (location){
        fetchWeather(location);
    }
});

// Информация о погоде в городе
function fetchWeather(location){
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationID.textContent = data.name;
            temperature.textContent = `${Math.round(data.main.temp)} оC`;
            description.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.log("Ошибка при получении данных", error);
            alert("Ошибка данных");
        });

}