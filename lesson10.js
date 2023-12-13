// task 1
const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const userName = os.userInfo().username;
  const osType = os.type();
  const uptimeMinutes = Math.round(os.uptime() / 60);
  const currentDirectory = process.cwd();
  const serverFileName = path.basename(__filename);
  const htmlResponse = `
    <html>
      <head>
        <title>Node.js Server Information</title>
      </head>
      <body>
        <h1>Server Information</h1>
        <p><strong>User:</strong> ${userName}</p>
        <p><strong>Operating System:</strong> ${osType}</p>
        <p><strong>Uptime (minutes):</strong> ${uptimeMinutes}</p>
        <p><strong>Current Working Directory:</strong> ${currentDirectory}</p>
        <p><strong>Server File Name:</strong> ${serverFileName}</p>
      </body>
    </html>
  `;

  res.end(htmlResponse);
});
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// task 2 
const http = require('http');
const os = require('os');
const personalModule = require('./personalmodule');

const server = http.createServer((req, res) => {
    const username = os.userInfo().username;

    const currentDate = new Date();
    const greetingMessage = personalModule.getGreetingMessage(username);
    const responseMessage = `Date of request: ${currentDate.toString()}\n${greetingMessage}`;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(responseMessage);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});