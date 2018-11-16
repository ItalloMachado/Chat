# Chat
Projeto de um Chat, utilizando Node.js.

Para executar o servidor:
1. Clone o repositório nesse GitHub.
2. Precisa do node.js instalado na máquina. (https://nodejs.org/en/);
3. Após instala o nodeJs, executa o prompt de comando e ir até o a diretório do Chat.
4. No diretório execute o comando "npm install" para instalar as bibliotecas necessárias do aplicação.
5. executa o comando "npm start" ou "node server.js".

Pronto! o servidor do chat já está sendo executado.
Para executar o cliente e entrar no chat, vá em algum browser de sua preferência e utilize o url:http://localhost:3000;

Caso deseja executar o chat para todas as máquinas na rede wifi, apenas vá no código do cliente.js no diretório Public e altere a linha "const socket = io.connect('http://localhost:3000');" com o ip do servidor. (para encontra o ip, digite ipconfig no promt de comando na máquina do servidor).  

OBS: não precisa instalar o node.Js nas máquinas que vão ser o cliente, apenas na máquina que está servindo como servidor.
