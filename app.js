const contactForm = document.getElementById('contactForm')

contactForm.addEventListener('submit',(event) => {
    
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        message: messageInput.value,
    }

    const errors = {
        firstName: false,
        lastName: false,
        phone: false,
        email: false,
        message: false,
    }

/*     const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    phoneError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';
 */
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.message) {
        const nameRegex = /^[a-zA-Z ]+$/;
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        
        if (!formData.firstName || !nameRegex.test(formData.firstName)) {
            errors.firstName =  true;
            document.getElementById("firstName").setAttribute("placeholder", "Champ requis");
        }
        if (!formData.lastName || !nameRegex.test(formData.lastName)) {
            errors.lastName =  true;
            document.getElementById("lastName").setAttribute("placeholder", "Champ requis");
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone =  true;
            document.getElementById("phone").setAttribute("placeholder", "Champ requis");
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email =  true;
            document.getElementById("email").setAttribute("placeholder", "Champ requis");
        }
        if (!formData.message || !nameRegex.test(formData.message)) {
            errors.message =  true;
            document.getElementById("message").setAttribute("placeholder", "Champ requis");
        }
    }
    if (Object.values(errors).includes(true)) {
        console.log(formData)
        console.log(errors)
    }
    else {
        axios.post('http://212.83.176.255:3030/contact', formData)
            .then((response) => {
                console.log(response.data);
                alert("message envoyé")
            }).catch((errors) => {
                console.errors(errors);
            });
    }
})

