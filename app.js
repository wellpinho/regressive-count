const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countDownContainer = document.querySelector('#countdown')


const nextYear = new Date().getFullYear() + 1
const newYeatTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountDownValues = ({
  days,
  hours,
  minutes,
  seconds
}) => {
  secondsContainer.textContent = getTimeUnit(seconds)
  minutesContainer.textContent = getTimeUnit(minutes)
  hoursContainer.textContent = getTimeUnit(hours)
  daysContainer.textContent = getTimeUnit(days)
}

const updateCountDown = () => {
  const currentTime = new Date()
  const diference = newYeatTime - currentTime

  const days = Math.floor(diference / 1000 / 60 / 60 / 24) // get hour
  const hours = Math.floor(diference / 1000 / 60 / 60) % 24 // get hour
  const minutes = Math.floor(diference / 1000 / 60) % 60 // get minutes
  const seconds = Math.floor(diference / 1000) % 60 // get seconds

  insertCountDownValues({
    days,
    hours,
    minutes,
    seconds
  })
}

const handleCountDownDisplay = () => {
  spinnerLoading.remove()
  countDownContainer.style.display = 'flex'
}

setTimeout(handleCountDownDisplay, 1000)

// repet a função sempre que o tempo acontecer
setInterval(updateCountDown, 1000)