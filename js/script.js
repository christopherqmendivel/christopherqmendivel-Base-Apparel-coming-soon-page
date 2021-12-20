// Variables
const form = document.querySelector('#form');
const email = document.querySelector('.email');

const err = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Eventos

eventListeners();

function eventListeners() {

    form.addEventListener('submit', validarFormulario);
    email.addEventListener('blur', validarFormulario);
}


// Validar Formulario
function validarFormulario(e) {

    e.preventDefault();

    if (err.test(email.value)) {
        form.classList.remove('error');
    } else {
        form.classList.add('error');
    }
}