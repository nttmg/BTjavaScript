let weather = {
    apiKey: "3e5bfb5e359aa961bf90a83a6e47279b",  //745c2e92304a7f2fb5e3de92b74c6fd2
    fetchWeather: function() {
      fetch (
        "https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid="
        
        + this.apiKey
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const {icon} = data.weather[0];
      const {temp} = data.main;
      const {description} = data.weather[0];
      document.querySelector("#icon").src = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      document.querySelector("#temp").innerHTML = temp + "°C";
      document.querySelector("#title").innerHTML = description;
    }
  };
  
  weather.fetchWeather();

