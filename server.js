const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3000);
const io = socket(server);
var   usuarios=[];

app.use(express.static('Public'));

io.sockets.on('connection', newConection);
console.log('running...')


function newConection(socket){
    console.log('Conectado: '+ socket.id+' ping: '+socket.ping);
    socket.on('msg',recebido);
    socket.on('user',UsuarioRecebido);
    socket.on('disconnect',usuarioDesconectado);
    console.log(socket.disconnected);
    
    function recebido(data){
        socket.broadcast.emit('msgRecebido',{msg: data, nome: socket.username});
        console.log(socket.username);
        console.log(data);
    }
    function UsuarioRecebido(data){
        socket.username=data;
        console.log(data);
        console.log(socket.username);
        usuarios.push(socket.username);
        console.log("Usuarios"+usuarios);
        UpdateUsuarios();
    }
    function usuarioDesconectado(){
        console.log('Usuario desconectado');
        console.log(socket.username);
        usuarios.splice(usuarios.indexOf(socket.username),1);
        UpdateUsuarios();
    }
    function UpdateUsuarios(){
        socket.emit('UpdateUsuarios',usuarios);
        socket.broadcast.emit('UpdateUsuarios',usuarios);
    }
}