
//Authors: Felipe cestau, Rordrigo Mignola, Franco Miret

const { Console } = require('console');
const express = require('express')
const https = require('https')


const app = express()

app.get('/', (req, res) => {
  const location = "Argentina";
  const appId = "23d1c8482dc31f23ed34680dc6687fa5";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + appId;
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      response.on("data", (data) => {
        const weatherData = JSON.parse(data);
        console.log("Temperatura en:", location)
        console.log("Weather description: ",weatherData["weather"][0]["description"])
        console.log("Min temp:",weatherData["main"]["temp_min"])
        console.log("Max temp:",weatherData["main"]["temp_max"])
        console.log("Pressure:",weatherData["main"]["pressure"])
        console.log("Humidity:",weatherData["main"]["humidity"])
        console.log("Wind speed: ",weatherData["wind"]["speed"])
      })
    } else {
        console.log('error')
    }
  })
})

app.listen(8000)
