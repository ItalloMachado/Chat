# Chat
Projeto de um Chat, utilizando Node.js.
Para executar o servidor:
1- Precisa do node.js instalado na máquina. (https://nodejs.org/en/);
2- Após instala o nodeJs, executa o prompt de comando e ir até o a pasta do Chat.
3- Na pasta executa os comandos "npm install" para instalar as bibliotecas necessarias do aplicação.
4- executa o comando "npm start" ou "node server.js".
Pronto! o servidor do chat já está sendo executado.
Para executar o cliente e entrar no chat, vá em algum browser de preferência e usar o url:http://localhost:3000;

Caso deseja executar o chat para todas as máquinas na rede, apenas vá no código do cliente.js na pasta Public e altere a linha "const socket = io.connect('http://localhost:3000');" com o ip do servidor. (para encontra o ip, digite ipconfig no pront de comando).  

OBS: não precisa instalar o node.Js nas máquinas que vão ser o cliente, apenas na máquina que está servindo como servidor.
