const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req,res)=>{
  res.writeHead(200);
  res.end('Bot is Live');
}).listen(process.env.PORT || 10000);

function createBot(){
  const bot = mineflayer.createBot({
    host: '91.197.6.226',
    port: 28432,
    username: 'AFK_24x7'
  });
  bot.on('spawn', () => console.log('Bot Joined! 24x7 Online'));
  bot.on('end', () => setTimeout(createBot, 10000));
  bot.on('error', (e) => console.log(e));
}
createBot();
