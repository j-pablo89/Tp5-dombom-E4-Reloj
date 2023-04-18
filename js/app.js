// Crear una web con un reloj que muestre la siguiente información:
const arrayDias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'];
const arrayMes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

function establecerFechaHora(){
    let fechaHora = new Date();
    let hora = fechaHora.getHours();
    let minutos = fechaHora.getMinutes();
    let segundos = fechaHora.getSeconds();
    let fecha = document.getElementById('fechaActual');
    let horario = document.getElementById('horaActual');
    let ampm='';
    if(hora > 12){
        hora = hora - 12;
        ampm = 'PM';
    }else{
        ampm = 'AM';
    }
    if(hora<10){
        hora = `0${hora}`;
    }
    if(minutos<10){
        minutos = `0${minutos}`;
    }
    if(segundos<10){
        segundos = `0${segundos}`;
    }
    fecha.innerHTML = `${arrayDias[fechaHora.getDay()]} ${fechaHora.getDate()} de ${arrayMes[fechaHora.getMonth()]} de ${fechaHora.getFullYear()}`;
    horario.innerHTML = `${hora}:${minutos}:${segundos} ${ampm}`; 

}

setInterval(establecerFechaHora,1000);