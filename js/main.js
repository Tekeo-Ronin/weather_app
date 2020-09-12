window.addEventListener('load', ()=> {
  let long;
  let lat;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      // const proxy = 'http://cors-anywhere.herokuapp.com/';
      const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=31ff224de84100d105e67da0cf459f2c`;

        
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
    });
  }
});
