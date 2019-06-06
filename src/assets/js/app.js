//var contactRef =firebase.database().ref().child("contactForm");

var messagesRef = firebase.database().ref().child("contact_takemoto");
function submitForm(e){
	e.preventDefault();
	// Get values
	var name = getInputVal('name');
	var company = getInputVal('company');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');

	// Save message
	saveMessage(name, company, email, phone, message);


	// Clear form
	$('#contactForm')[0].reset();
}

// Function to get get form values
function getInputVal(id) {
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	});
}
$(document).ready(function () {
	$('#contactForm').on('submit',submitForm);
	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		effect:'fade',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
});

