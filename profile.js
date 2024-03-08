// 

// In profile.js, create event listeners that check for a click on each of these buttons.
// 
// If a user clicks on “My Favorite Color”, it should alert the user of your favorite color, and so on.

// create variables to query each button individually
const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')

// create variable to track resto recommendation
const restoRec = document.querySelector('.restoRec')

// write the function to add buttons alerts

const colorBtn = () => {
    alert(`My favorite color is YELLOW!`)
}
color.addEventListener('click', colorBtn)

const placeBtn = () => {
    alert(`My favorite place is the canopy`)
}
place.addEventListener('click', placeBtn)

const ritualBtn = () => {
    alert(`Rituals are best kept secret`)
}
ritual.addEventListener('click', ritualBtn)

// create function to get a random restaraunt
const resto = () => {
    alert(`it works`)
}
restoRec.addEventListener('click', resto)
