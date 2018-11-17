/*Arquivo Js do servidor do Projeto deo Chat -- Autor:Itallo Guilherme Machado*/
//dependências do npm(precisa do Node.Js)
const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3000);//porta escolhida para a comunicação.
const io = socket(server);
var   usuarios=[];//variável que determina o nome dos usuários online.

app.use(express.static('Public'));// determinando o caminho do projeto.????

io.sockets.on('connection', newConection);// Atendo para conecções dos clientes.
console.log('running...');


function newConection(socket){
    socket.on('msg',recebido);//Escuta de mensagens dos clientes
    socket.on('user',UsuarioRecebido);//Escuta do nome dos clientes
    socket.on('disconnect',usuarioDesconectado);//Escuta dos clientes que desconectaram
    console.log(socket.disconnected);
    
    //Funcao ativa quando recebe uma mensagem. A função pega a mensagem e o nome do usuario que mandou a mensagem 
    //recebida e distribui para todos os clientes conectados.
    function recebido(data){
        socket.broadcast.emit('msgRecebido',{msg: data, nome: socket.username});
    }
    //funcao ativa quando há um novo usuario. Ela atualiza a array de usuarios adicionando o nome do novo cliente.
    function UsuarioRecebido(data){
        socket.username=data;
        usuarios.push(socket.username);
        console.log("Usuarios"+usuarios);
        UpdateUsuarios();
    }
    //Funcao ativa quando um cliente é desconectado. Ele atualiza a array de usuários retirando o nome 
    //do cliente desconectado.
    function usuarioDesconectado(){
        console.log('Usuario desconectado');
        console.log(socket.username);
        usuarios.splice(usuarios.indexOf(socket.username),1);
        UpdateUsuarios();
    }
    //Funcao que  atualiza a lista de cliente conectado no servidor. Ele manda o nome de todos os 
    //cliente para todos clientes conectados. 
    function UpdateUsuarios(){
        socket.emit('UpdateUsuarios',usuarios);
        socket.broadcast.emit('UpdateUsuarios',usuarios);
    }
}
