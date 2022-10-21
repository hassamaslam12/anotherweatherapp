function getData() {
  let cityName = document.querySelector("#cityName").value
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e4e817099c43b95c3eb53ff397a5fbfa&units=metric`)
    .then(function (response) {
      // handle success
      console.log(response);
      console.log("success")
      document.querySelector("#result").innerHTML =
        `<h1>${response.data.name}</h1>
    <p>Now,</p>
    <img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png">
    <h1> ${response.data.main.temp}°C</h1>
    <p>${response.data.main.temp_min}°C - ${response.data.main.temp_max}°C</p>`


      if (response.data.weather[0].description == `clear sky`) {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/789152/pexels-photo-789152.jpeg?auto=compress&cs=tinysrgb&w=600');  background-repeat: no-repeat;background-size: cover;`
      }
      else if (response.data.weather[0].description == `few clouds`) {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/13443380/pexels-photo-13443380.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');  background-repeat: no-repeat;background-size: cover;`
      }
      else if (response.data.weather[0].description == `scattered clouds`) {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/13353126/pexels-photo-13353126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
          background-repeat: no-repeat;
          background-size: cover;`
      }
      else if (response.data.weather[0].description == `broken clouds`) {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/4322496/pexels-photo-4322496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
          background-repeat: no-repeat;
          background-size: cover;`
      }
      else if (response.data.weather[0].description == `shower rain`) {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/13996626/pexels-photo-13996626.jpeg?auto=compress&cs=tinysrgb&w=600');
          background-repeat: no-repeat;
          background-size: cover;`
      }
      else if (response.data.weather[0].description == `rain`) {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/1530423/pexels-photo-1530423.jpeg?auto=compress&cs=tinysrgb&w=600');
          background-repeat: no-repeat;
          background-size: cover;`
      }
      else if (response.data.weather[0].description == `thunderstorm`) {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/66867/norman-oklahoma-lightning-dangerous-66867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');  background-repeat: no-repeat;
        background-size: cover;`
      }
      else if (response.data.weather[0].description == `snow`) {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
          background-repeat: no-repeat;
          background-size: cover;`
      }
      else if (response.data.weather[0].description == `mist`) {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&w=600');
          background-repeat: no-repeat;
          background-size: cover;`
      }
      else {
        document.querySelector("body").style =
          `background-image: url('https://images.pexels.com/photos/147465/pexels-photo-147465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
          background-repeat: no-repeat;
          background-size: cover;`
      }

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e4e817099c43b95c3eb53ff397a5fbfa&units=metric`)
    .then(function (response) {
      // handle success
      console.log(response);
      console.log("forecast updated")
      let forecastDiv = document.querySelector("#forecastDiv");

      forecastDiv.innerHTML = ``

      response.data.list.map(eachItem => {
        forecastDiv.innerHTML += `
        <div id="forecastCard">
        <span>${moment(eachItem.dt_txt).format("ddd D/M")}</span>
          <br/>
          <span>${moment(eachItem.dt_txt).format("ha")}</span>
           <h1 >${eachItem?.main?.temp.toFixed(0)}°C</h1>
           <span>${eachItem?.weather[0].description}</span>
        
        <img src="http://openweathermap.org/img/wn/${eachItem.weather[0].icon}@2x.png">
        <p>${eachItem.main.temp_min}°C - ${eachItem.main.temp_max}°C</p>
      </div>`
      }



      )

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })


}