
const socket = io.connect('http://localhost:3000');

socket.on('msgRecebido',funcaoRecebido);
socket.on('UpdateUsuarios',Updateusuarios);
var MeuNome='';

function Updateusuarios(data){
    console.log("Usuairio:"+data);
    var html ='';
    for (i=0;i<data.length;i++){
    html+=' <li>'+data[i]+'</li>';
    }
    $("#UsuariosOn").html(html);
}

function funcaoRecebido(data){
    console.log(data);
    $("#chatId").append('<div class="mensagem amigo"><div class="Nome"><h1>'+data.nome+'</h1></div><p class="msg-chat">'+data.msg+'</p></div>');
}
$(document).ready(function(){
    $("#btnMSg").click(function(){
        var $mensagem=$('#AreaMsg');
        console.log($mensagem);
        socket.emit('msg',$('#AreaMsg').val());
        $("#chatId").append('<div class="mensagem eu"><div class="Nome"><h1>'+MeuNome+'</h1></div><p class="msg-chat">'+$('#AreaMsg').val()+'</p></div>');
        document.getElementById('AreaMsg').value = "";
    });
    $("#btnEntra").click(function(){
        if ($('#AreaEntra').val()!=''){
            MeuNome=$('#AreaEntra').val();
            socket.emit('user',$('#AreaEntra').val());
        }else{
            console.log('Anônimo');socket.emit('user','Anônimo');
        }
    document.getElementById('inicioId').style.display="none";
    document.getElementById('rowId').style.display="block";
    });
});

