document.getElementById('btnLogin').addEventListener('click', validar);

function validar(){
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    const userName ="user";
    const passCode="123";

    if(user == "" && pass==""){
        alert("Los campos son requeridos");
    }else{
        if(user ==userName && pass==passCode){
            alert('Acceso concedido');
            window.location.href = 'home.html';
        }else{ 
            alert("El usuario o contraseña es incorrecta");
        }
    }
}