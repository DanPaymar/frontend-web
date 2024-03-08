console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');

	alert(`Look at you, you submitted a form.`)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const homeImg = document.querySelector('img')
// create the compliment function with an alert
const compliment = () => {
	alert(`You have good geometry`)
}
// add event listener to trigger alert on mouseover
homeImg.addEventListener('mouseover', compliment)