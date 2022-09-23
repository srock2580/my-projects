

const weatherKey = '1b237338a25a307528f0d8ee0c8c6e60'
const googleMapKey = 'AIzaSyAhwHxtsqpK90UeQPF8aZI78bguQCSUd-M'
const hazeIcon = 'https://cdn1.iconfinder.com/data/icons/weather-471/128/HAZE-128.png'
const cloudIcon = 'https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Clouds-128.png'
const clearIcon = 'https://cdn1.iconfinder.com/data/icons/weather-471/128/SUN-128.png'
const cityNamedom = document.querySelector('.cityName')
const weatherImgDom = document.querySelector('.skyAndTemp > img')
const tempDom = document.querySelector('.skyAndTemp > h1')
const minTempDom = document.querySelector('.min')
const maxTempDom = document.querySelector('.max')
const windSpeedDom = document.querySelector('.wind')
const mapDom = document.querySelector('iframe')

// append the data
const appendData = (data, cityName) => {
  const temp = Math.floor(data.main.temp - 273.15)
  const minTemp = Math.floor(data.main.temp_min - 273.15)
  const maxTemp = Math.floor(data.main.temp_max - 273.15)
  const windSpeed = data.wind.speed
  const skyCon = data.weather[0].main

const windSpeedDom = document.querySelector('.wind')
  mapDom.src = `https://maps.google.com/maps?q=${cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  cityName = cityName.split('')
  cityName[0] = cityName[0].toUpperCase()
  cityName = cityName.join('')

  cityNamedom.innerText = cityName
  if (skyCon === 'Clouds') weatherImgDom.src = cloudIcon
  else if (skyCon === 'Haze') weatherImgDom.src = hazeIcon
  else if (skyCon === 'Clear') weatherImgDom.src = clearIcon
  tempDom.innerText = temp + '° C'
  minTempDom.innerText = 'Min Temp: ' + minTemp + '° C'
  maxTempDom.innerText = 'Max Temp: ' + maxTemp + '° C'
  windSpeedDom.innerText = 'Wind Speed: ' + windSpeed + ' m/s'
}


// fetch the weather data
const fetchData = async (cityName) => {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherKey}`)

    const data = await res.json()
  
    if (data.cod === '404') alert(data.message)
    else appendData(data, cityName)

  } catch(eror) {
    console.log('this is ' + eror)
  }
}

// form input
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const cityName = document.querySelector('#search').value
  if (cityName !== '') fetchData(cityName)
  document.querySelector('#search').value = ''
})

