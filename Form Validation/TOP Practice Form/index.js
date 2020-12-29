const formElement= document.getElementById('new-form')

const formValidation = (() => {
    const validateAll = (form) => {
        const fields = Array.from(form.querySelectorAll('.input'))
        let valid = true;
        fields.forEach(field => {
            if (!field.validity.valid) {
                const errorSpan = field.nextElementSibling;
                showError(field, errorSpan);
                valid = false;
            }
        })

        if (!_passwordsMatch()) {
            showError(form['password-confirm'], form['password-confirm'].nextElementSibling)
            valid = false;
        }
        
        return valid;
    }

    const validateSingleInput = (element) => {
        const errorSpan = element.nextElementSibling;
        if (element.validity.valid && _passwordsMatch()) {
            console.log(_passwordsMatch())
            errorSpan.textContent = '';
            errorSpan.className = 'error';
            element.classList.remove('active');
        } else {
            showError(element, errorSpan)
        }
    }

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
        } else if (!_passwordsMatch()) {
            errorSpan.textContent = 'Passwords don\'t match!'

        }

        errorSpan.classList.add('active');
        element.classList.add('active');

    }

    const _passwordsMatch = () => {
        const pass = document.querySelector('input[name="password"]').value;
        const passConfirm = document.querySelector('input[name="password-confirm"]').value;
        console.log(`pass: ${pass} passConfirm: ${passConfirm}`)

        if (!passConfirm) {return null}

        return ( pass === passConfirm ) ? true : false;

    }

    return { validateSingleInput, showError, validateAll }

})();

formElement.addEventListener('input', (e) => {
    let el = e.target
    if (el) {
        formValidation.validateSingleInput(el)
    }
})

const add = document.querySelector("#submit-button")
add.addEventListener('click', (e) => {
    if (!formValidation.validateAll(document.querySelector('form'))) {
        alert('please fill out missing values')
    } else {

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

// const formValidation = (() => {

    
    // const email = (input) => console.log(input)
    // return { email }

// })();\


// formElement.addEventListener('input', (e) => {
//     let el = e.target.name
//     if (el) {
//         formValidation[el](e.target.value)
//     }
// })