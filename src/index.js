function refreshWeather(response){
    let tempValue = document.querySelector("#weather-temp-value");
    let temperature = response.data.temperature.current;
    let enteredCity = document.querySelector("#city");

    enteredCity.innerHTML = response.data.city


   

    tempValue.innerHTML = Math.round(temperature);


}

function searchCity (city){
    // make api call and update the interface
    let apiKey = "1b333d05d1t4ac986f832ffc0b6o6d3e";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather)
}


function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value)


}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);

searchCity("Lisbon");