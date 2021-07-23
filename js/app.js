const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const formulario = document.querySelector('form');
const formularioEnviar = document.querySelector('#enviar-mail');
const btnEnviar = document.querySelector('#enviar');
const resetBtn = document.querySelector('#resetBtn');

eventListener();
// Event listeners
function eventListener() {
    document.addEventListener('DOMContentLoaded', inicioApp);

    email.addEventListener('blur', validarformulario);

    asunto.addEventListener('blur', validarformulario);

    mensaje.addEventListener('blur', validarformulario);

    resetBtn.addEventListener('click', resetFormulario);
}


//Funciones

//deshabilita el envio
function inicioApp() {
    email.classList.add('error');
    asunto.classList.add('error');
    mensaje.classList.add('error');
}

//Valida el formulario
function validarformulario(e) {
    
    if(e.target.value === "") {
        e.target.classList.remove('border-green-500');
        e.target.classList.add('error','border-red-500');
        mensajeError('Todos los campos son requeridos');
        
    } else {
        
        if(this.type === 'email') {
            validarEmail(e.target.value);
            
        } else {
            e.target.classList.remove('error','border-red-500');
            e.target.classList.add('border-green-500');
        }
    }

    if (asunto.classList.contains('error') || mensaje.classList.contains('error') || email.classList.contains('error')) {
        console.log('hay error');
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

    } else {
        console.log('no hay error');
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

//Muestra mensaje de error
function mensajeError(error) {
    const mensaje = document.createElement('P');
    const mensajeError = document.createElement('DIV');

    mensaje.textContent = error;
    mensajeError.appendChild(mensaje);
    mensajeError.classList.add('border', 'border-red-500');
    mensajeError.style.textAlign = 'center';
    mensajeError.style.margin ='2rem 0';
    formulario.appendChild(mensajeError);

    setTimeout ( () => {
        formulario.removeChild(mensajeError);
    },1500);
}

//Resetea formulario
function resetFormulario(e) {
    formulario.reset();
    e.preventDefault();
}

function validarEmail(campo) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(campo)) {
        email.classList.add('border-green-500');          
        email.classList.remove('error','border-red-500');
    } else {
        mensajeError('email no valido');
        email.classList.remove('border-green-500');
        email.classList.add('error','border-red-500');
    }               
}