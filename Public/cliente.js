/*Arquivo Js do cliente do Projeto deo Chat -- Autor:Itallo Guilherme Machado*/

const socket = io.connect('http://localhost:3000');//conectar o cliente ao endereço do servidor 

socket.on('msgRecebido',funcaoRecebido);//Escuta de mensagens do servidor
socket.on('UpdateUsuarios',Updateusuarios);//Escuta de atualização dos usuários, informada pelo servidor
var MeuNome='';// o nome do cliente conectado
//Função que atualiza a lista de usuários online.

function Updateusuarios(data){
    var html ='';// variável auxiliar.
    for (i=0;i<data.length;i++){
    html+=' <li>'+data[i]+'</li>';
    }
    $("#UsuariosOn").html(html);// atualiza a lista no arquivo html.
}
//Função que escreve no arquivo html a mensagem recebida do servidor
function funcaoRecebido(data){
     $("#chatId").append('<div class="mensagem amigo"><div class="Nome"><h1>'+data.nome+'</h1></div><p class="msg-chat">'+data.msg+'</p></div>');
    var elem=document.getElementById('chatId');
    elem.scrollTop=elem.scrollHeight;// descer o scroll até o final da barra.
   }
$(document).ready(function(){
    //função ativa quando se clica???? o botão de mandar mensagem.
    $("#btnMSg").click(function(){
        if($('#AreaMsg').val()!=''){// manda a mensagem caso tenha alguma coisa no campo de mensagem.
            var $mensagem=$('#AreaMsg');
            socket.emit('msg',$('#AreaMsg').val());//envia a mensagem para o servidor.
            $("#chatId").append('<div class="mensagem eu"><div class="Nome"><h1>'+MeuNome+'</h1></div><p class="msg-chat">'+$('#AreaMsg').val()+'</p></div>');
            var elem=document.getElementById('chatId');
            elem.scrollTop=elem.scrollHeight; // descer o scroll até o final da barra.
            document.getElementById('AreaMsg').value = "";
        }
    });
    //função ativa quando clica no botão de entrar no chat.
    $("#btnEntra").click(function(){
        if ($('#AreaEntra').val()!=''){// caso o nome não for informado, o cliente vai se chamar "Anônimo".
            MeuNome=$('#AreaEntra').val();// atualiza o nome do cliente
            socket.emit('user',$('#AreaEntra').val());
        }else{
            MeuNome='Anônimo';
            socket.emit('user','Anônimo');
        }
    document.getElementById('inicioId').style.display="none";// retira a pagina de login.
    document.getElementById('rowId').style.display="block";// ativa a pagina do chat.
    });
});


