// comando para establecer la conexion 

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al Servidor...');
});

socket.on('disconnect', function() {
    console.log('Perdimos comunicación con el Servidor...');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {
    console.log('click');

    socket.emit('siguienteTicket', null, function(resp) {
        console.log(resp);
        label.text(resp);
    });


})