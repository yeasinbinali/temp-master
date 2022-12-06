const searchTemp = () => {
    const tempField = document.getElementById('temp-field');
    const tempFieldValue = tempField.value;
    console.log(tempFieldValue);
    tempField.value = '';

    const API_KEY = '5fdd1fff46a413d35392afa14e4ea8cd'
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${tempFieldValue}&appid=${API_KEY}`
    fetch(weatherAPI)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const tempPlace = (id, city) => {
    document.getElementById(id).innerText = city;
}

const displayTemp = temperature => {
    console.log(temperature)
    tempPlace('temp-place', temperature.name);
}