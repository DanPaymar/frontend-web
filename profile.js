// 

// In profile.js, create event listeners that check for a click on each of these buttons.
// 
// If a user clicks on “My Favorite Color”, it should alert the user of your favorite color, and so on.

// create variables to query each button individually
const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')
const restoRec = document.querySelector('.restoRec')



// write the function to add buttons alerts

const colorBtn = () => {
    alert(`My favorite color is YELLOW!`)
}

const placeBtn = () => {
    alert(`My favorite place is the canopy`)
}

const ritualBtn = () => {
    alert(`Rituals are best kept secret`)
}

const resto = () => {
    console.log('something')
    alert(`test`)
}

// add the event listeners for click functions
color.addEventListener('click', colorBtn)
place.addEventListener('click', placeBtn)
ritual.addEventListener('click', ritualBtn)
restoRec.addEventListener('click', resto)