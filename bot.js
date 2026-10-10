const mineflayer = require('mineflayer');
const http = require('http');
http.createServer((req,res)=>{res.end('Bot Running')}).listen(process.env.PORT||10000);
function createBot(){
  const bot = mineflayer.createBot({host:'91.197.6.226',port:28432,username:'AFK_24x7'});
  bot.on('spawn',()=>console.log('Bot Joined!'));
  bot.on('end',()=>setTimeout(createBot,5000));
}
createBot();
