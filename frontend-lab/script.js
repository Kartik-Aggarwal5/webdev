let weather = {
    apiKey: "46ba36d59027a71787370745f1e87eb9",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey).then((response) => response.json).then((data) => {
            console.log(data)
            this.displayWeather(data);
        })

    },
    displayWeather: function(data) {
        const { name } = data.weather;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        const { country } = data.sys;
        console.log(name, icon, description, temp);

        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".temp").innerText = temp + "°F";
        
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-button").addEventListener("click", () => {weather.search()});

document.querySelector(".search-button").addEventListener("keyup", functii)

weather.fetchWeather("berkeley");
