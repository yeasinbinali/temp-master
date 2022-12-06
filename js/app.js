const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

const errorHandle = displayError => {
    document.getElementById('error').style.display = displayError;
}

const weatherCondition = displayWeather => {
    document.getElementById('weather-condition').style.display = displayWeather;
}

const searchTemp = () => {
    const tempField = document.getElementById('temp-field');

    toggleSpinner('block');
    weatherCondition('none');
    errorHandle('none');

    const tempFieldValue = tempField.value;

    if(!tempFieldValue){
        errorHandle('block');
        weatherCondition('none');
        toggleSpinner('none');
    }
    
    tempField.value = '';

    const API_KEY = '5fdd1fff46a413d35392afa14e4ea8cd'
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${tempFieldValue}&appid=${API_KEY}&units=metric`
    fetch(weatherAPI)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const temperatureInnerText = (id, city) => {
    document.getElementById(id).innerText = city;
}

const displayTemp = temperature => {
    const h3 = document.getElementById('celcius').innerText = '° C'
    temperatureInnerText('temp-place', temperature.name);
    if(temperature.name == null){
        errorHandle('block');
        weatherCondition('none');
        toggleSpinner('none');
    }
    temperatureInnerText('temp-degree', temperature.main.temp, h3);
    temperatureInnerText('condition', temperature.weather[0].main);

    const iconURL = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', iconURL);

    toggleSpinner('none');
    weatherCondition('block');
}