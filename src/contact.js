function generateContact() {
    let contactForm = document.createElement('form');
    contactForm.action = '';
    contactForm.className = 'contact-form';
    let firstName = document.createElement('input');
    firstName.name = 'first-name';
    firstName.placeholder = 'First Name';
    let lastName = document.createElement('input');
    lastName.name = 'last-name';
    lastName.placeholder = 'Last Name';
    let email = document.createElement('input');
    email.name = 'email';
    email.placeholder = 'Email';
    email.type = 'email';
    let message = document.createElement('textarea');
    message.name = 'message';
    message.placeholder = 'Message';
    let inputs = [firstName, lastName, email, message];
    inputs.forEach(inputField => {
        inputField.className = 'contact-inputs';
        inputField.setAttribute('required', 'true');
    });
    let submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', clickHandler);
    contactForm.append(firstName, lastName, email, message, submitButton);

    return contactForm;
}

function clickHandler(event) {
    event.preventDefault();
    console.log('button clicked!');
    let formData = document.querySelectorAll('.contact-inputs');
    let contactUser = { 
        firstName: formData[0].value,
        lastName: formData[1].value,
        email: formData[2].value,
        message: formData[3].value
     };
     if(contactUser.firstName && contactUser.lastName &&
        contactUser.email && contactUser.message) {
        console.table(contactUser);
        alert(`Thank you! We'll be in contact shortly!`);
        formData.forEach(item => item.value = '');
    } else{
        alert('Error! Please fill all fields!');
    }

}

export default generateContact;