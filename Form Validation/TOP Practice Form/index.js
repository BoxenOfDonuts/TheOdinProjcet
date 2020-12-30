const formElement= document.getElementById('new-form')

const formValidation = (() => {
    const validateAll = (form) => {
        const fields = Array.from(form.querySelectorAll('.input'))
        let valid = true;
        fields.forEach(field => {
            if (!field.validity.valid) {
                const errorSpan = field.nextElementSibling;
                errorDisplay.showError(field, errorSpan);
                valid = false;
            }
        })

        if (_validatePasswords()) {
            if (!passwordsMatch())
                errorDisplay.showError(form['passwordConfirm'], form['passwordConfirm'].nextElementSibling)
                valid = false;
        }
        
        return valid;
    }

    const _validateSingleInput = (element) => {
        const errorSpan = element.nextElementSibling;
        if (element.validity.valid) {
            errorDisplay.clearError(element, errorSpan)
        } else {
            errorDisplay.showError(element, errorSpan)
        }
    }

    const passwordsMatch = () => {
        const element = document.querySelector('input[name="passwordConfirm"]')
        const pass = document.querySelector('input[name="password"]').value;
        const passConfirm = element.value;

        return ( pass === passConfirm ) ? true : false;

    }

    const _validatePasswords = () => {
        const passConfirm = document.querySelector('input[name="passwordConfirm"]').value
        const pass = document.querySelector('input[name="password"]').value;
        if (pass !== "" && passConfirm !== "") {
            return true
        }

        return false;

    }

    const email = (element) => {
        _validateSingleInput(element);
    }

    const country = (element) => {
        _validateSingleInput(element);
    }

    const zipcode = (element) => {
        _validateSingleInput(element);
    }

    const password = (element) => {
        _validateSingleInput(element);
                
    }

    const passwordConfirm = (element) => {
        _validateSingleInput(element);
        if (_validatePasswords()) {
            if (passwordsMatch()) {
                errorDisplay.clearError(element, element.nextElementSibling)
            } else {
                errorDisplay.showError(element, element.nextElementSibling)
            }
        }

    }

    return { email, country, zipcode, password, passwordConfirm, passwordsMatch, validateAll }

})();


const errorDisplay = (() => {

    const showError = (element, errorSpan) => {
        if (element.validity.valueMissing) {
            errorSpan.textContent = 'Please enter a value';
        } else if (element.validity.typeMismatch) {
            errorSpan.textContent = `please enter a valid ${element.name}`;
        } else if (element.validity.tooShort || element.validity.tooLong) {
            errorSpan.textContent = `Field should be at between ${element.minLength} and ${element.maxLength} characters`;
        } else if (element.validity.rangeUnderflow) {
            errorSpan.textContent = `Every book has at least ${element.min} page`;
        } else if (element.validity.patternMismatch) {
            errorSpan.textContent = `please enter a vlid ${element.name}`;
        } else if (!formValidation.passwordsMatch()) {
            errorSpan.textContent = 'Passwords don\'t match!'

        }

        errorSpan.classList.add('active');
        element.classList.add('active');

    }

    const clearError = (element, errorSpan) => {
        errorSpan.textContent = '';
        errorSpan.className = 'error';
        element.classList.remove('active');
    }

    return { showError, clearError }

})();


formElement.addEventListener('input', handleFormValidation)
document.querySelectorAll('.input').forEach(input => input.addEventListener('blur', handleFormValidation))

function handleFormValidation(e) {
    let el = e.target
    if (el) {
        formValidation[el.name](el);
    }
}

const add = document.querySelector("#submit-button")
add.addEventListener('click', (e) => {
    if (!formValidation.validateAll(document.querySelector('form'))) {
        alert('please fill out missing values')
    }
})






/* with modules!! */
// const formInputs = (data) => ({
//     email: (input) => console.log(input),
//     country: () => console.log('country'),
//     zipcode: () => console.log('zippy code'),
//     password: () => console.log('password'),
//     'password-confirm': () => console.log('password confirmed'),
// });

// const Form = (el) => {
//     const data = {
//         el,
//     }

//     // return Object.assign({},
//     //     formInputs(data)
//     // )
//     return {
//         ...formInputs(data),
//     }
// }

//  let x = Form(document.querySelector("#new-form"));

// formElement.addEventListener('input', (e) => {
//     let el = e.target.name
//     if (el) {
//         x[el](e.target.value)
//     }
// })



// this works too!!!

// const bv = (() => {

    
//     const email = (input) => console.log(input)
//     return { email }

// })();


// formElement.addEventListener('click', (e) => {
//     let el = e.target.name
//     if (el) {
//         bv[el](e.target.value)
//     }
// })