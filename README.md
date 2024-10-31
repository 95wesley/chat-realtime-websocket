# WebSocket Chat Application

Este é um aplicativo de chat em tempo real utilizando Node.js, Express e WebSocket. Ele permite que múltiplos usuários se conectem e troquem mensagens instantaneamente.

This is a real-time chat application using Node.js, Express, and WebSocket. It allows multiple users to connect and exchange messages instantly.

## Funcionalidades / Features

- Conexão em tempo real via WebSocket. / Real-time connection via WebSocket.
- Interface de chat simples e responsiva. / Simple and responsive chat interface.
- Mensagens enviadas são exibidas para todos os usuários conectados. / Sent messages are displayed to all connected users.
- Estilo moderno e limpo com CSS. / Modern and clean styling with CSS.

## Tecnologias Utilizadas / Technologies Used

- **Node.js**: Ambiente de execução para JavaScript no servidor. / Runtime environment for JavaScript on the server.
- **Express**: Framework web para Node.js. / Web framework for Node.js.
- **WebSocket**: Protocolo que permite comunicação bidirecional em tempo real entre cliente e servidor. / Protocol that enables real-time bidirectional communication between client and server.
- **HTML/CSS**: Para a construção da interface do usuário. / For building the user interface.

## Pré-requisitos / Prerequisites

Antes de executar o aplicativo, você precisa ter o Node.js e o npm instalados em seu sistema. Você pode baixar o Node.js [aqui](https://nodejs.org/). / Before running the application, you need to have Node.js and npm installed on your system. You can download Node.js [here](https://nodejs.org/).

## Estrutura do Projeto / Project Structure

/public
  └── index.html  # Interface do chat
server.js         # Código do servidor
package.json      # Configuração do projeto

## 1. Clone este repositório / Clone this repository

```bash
git clone https://github.com/95wesley/chat-realtime-websocket.git
cd chat-realtime-websocket
```

## 2. Instale as dependências / Install the dependencies

```bash
npm install
```

## 3. Inicie o servidor / Start the server

```bash
node server.js
```

## 4. Acesse o aplicativo em seu navegador / Access the application in your browser

```arduino
http://localhost:3500
```