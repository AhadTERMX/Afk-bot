const mineflayer = require('mineflayer');
const http = require('http');

// Render er jonno port open rakha lagbe
const PORT = process.env.PORT || 10000;
http.createServer((req, res) => {
  res.end('AFK Bot is running 24x7!');
}).listen(PORT, '0.0.0.0', () => {
  console.log('Web server running on port ' + PORT);
});

function createBot() {
  const bot = mineflayer.createBot({
    host: '91.197.6.226',
    port: 28432,
    username: 'AFK_24x7'
  });

  bot.on('spawn', () => {
    console.log('Bot Joined!');
  });

  bot.on('end', () => {
    console.log('Disconnected, reconnecting in 5 sec...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('Error:', err.message);
  });
}

createBot();
