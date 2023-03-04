const formulario = document.getElementById('formulario');
//Enlaces
const inputs = document.querySelectorAll('#formulario input');
//Expresiones regulares
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /[^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    telefono: /^.\d{7,14}$/,
}

const validarFormulario = (e)=>{
    switch(e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.querySelector('#grupo_usuario .input-error').classList.remove('input-error-activo');
            }else{
                document.querySelector('#grupo_usuario .input-error').classList.add('input-error-activo').style.display = 'block';
            }
        break;
        case "email":
            if(expresiones.correo.test(e.target.value)){
                document.querySelector('#grupo_email .input-error').classList.remove('input-error-activo');
            }else{
                document.querySelector('#grupo_email .input-error').classList.add('input-error-activo').style.display = 'block';
            }
        break;
        case "celular":
            if(expresiones.telefono.test(e.target.value)){
                document.querySelector('#grupo_celular .input-error').classList.remove('input-error-activo');
            }else{
                document.querySelector('#grupo_celular .input-error').classList.add('input-error-activo').style.display = 'block';
            }
        break;

        case "password":
            if(expresiones.password.test(e.target.value)){
                document.querySelector('#grupo_password .input-error').classList.remove('input-error-activo');
            }else{
                document.querySelector('#grupo_password .input-error').classList.add('input-error-activo').style.display = 'block';
            }
        break;

        case "re-password":
            validarPassword2();
        break;

    }
}

const validarPassword2 = ()=>{
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('re-password');

    if(pass1.value !== pass2.value){
        document.querySelector('#grupo_password2 .input-error').classList.add('input-error-activo');
    }else{
        document.querySelector('#grupo_password2 .input-error').classList.remove('input-error-activo');
    }
}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;
    let password = document.getElementById('password').value;
    let re_password = document.getElementById('re_password').value;
    
    if(usuario == '' || email == '' || celular == '' || password == '' || re_password == ''){
        document.getElementById('alertGeneral').style.display = 'block';
    }else{
        document.getElementById('alertGeneral').style.display = 'none'; 
    }
});

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});