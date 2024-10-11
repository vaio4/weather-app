const API =  "d9e74687dfbfd682c62df65c8c97fa7b";
// let base =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;
  
  // const searchbox = document.querySelector('.search-box');
  async function inputHandler(){
    const inp = document.querySelector('.search-box').value.toLowerCase().trim();
    console.log(inp);
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${API}`);
      const data = await response.json();
      console.log(data);
      render(data);
    }catch{
      console.log("error in fetching data");
      
    }
    
  }
  // const render = (data) =>{
  //   const city = document.querySelector('.city');
  //   const temp = document.querySelector('.temp');
  //   const weather = document.querySelector('.weather');
  //   const hilow = document.querySelector('.hi-low');

  //   city.innerHTML = data.name + ", " + data.sys.country;
  //   temp.innerHTML = data.main.temp + "°F";
  //   weather.innerHTML = data.weather[0].main;
  //   hilow.innerHTML = data.main.temp_min + "°F / " + data.main.temp_max + "°F";
  // }

  // function fahrenheitToCelsius(fahrenheit) {
  //   return (fahrenheit - 32) * 5 / 9;
  // }
  
  // // Example usage:
  // const fahrenheit = 100;
  // const celsius = fahrenheitToCelsius(fahrenheit);
  // console.log(`${fahrenheit}°F is equal to ${celsius}°C`);

  // const render = (data) => {
  //   const city = document.querySelector('.city');
  //   const temp = document.querySelector('.temp');
  //   const weather = document.querySelector('.weather');
  //   const hilow = document.querySelector('.hi-low');
  
  //   // Convert Fahrenheit to Celsius
  //   const fahrenheitToCelsius = (fahrenheit) => {
  //     return (fahrenheit - 32) * 5 / 9;
  //   };
  
  //   const currentTempCelsius = fahrenheitToCelsius(data.main.temp);
  //   const minTempCelsius = fahrenheitToCelsius(data.main.temp_min);
  //   const maxTempCelsius = fahrenheitToCelsius(data.main.temp_max);
  
  //   city.innerHTML = data.name + ", " + data.sys.country;
  //   temp.innerHTML = currentTempCelsius.toFixed(2) + "°C";
  //   weather.innerHTML = data.weather[0].main;
  //   hilow.innerHTML = minTempCelsius.toFixed(2) + "°C / " + maxTempCelsius.toFixed(2) + "°C";
  // };

  const render = (data) => {
    const city = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const weather = document.querySelector('.weather');
    const hilow = document.querySelector('.hi-low');
  
    // Convert Kelvin to Celsius
    const kelvinToCelsius = (kelvin) => {
      return kelvin - 273.15;
    };
  
    const currentTempCelsius = kelvinToCelsius(data.main.temp);
    const minTempCelsius = kelvinToCelsius(data.main.temp_min);
    const maxTempCelsius = kelvinToCelsius(data.main.temp_max);
  
    city.innerHTML = data.name + ", " + data.sys.country;
    temp.innerHTML = currentTempCelsius.toFixed(2) + "°C";
    weather.innerHTML = data.weather[0].main;
    hilow.innerHTML = minTempCelsius.toFixed(2) + "°C / " + maxTempCelsius.toFixed(2) + "°C";
  };





























  // searchbox.addEventListener('keypress', setQuery);
  
  // function setQuery(evt) {
  //   if (evt.keyCode == 13) {
  //     getResults(searchbox.value);
  //   }
  // }
  
  // function getResults (query) {
  //   fetch(`${api.base}`)
  //     .then(weather => {
  //       return weather.json();
  //     }).then(displayResults);
  // }
// const getDetails = async() =>{
//   const data = fetch()
// }