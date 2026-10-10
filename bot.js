const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: '91.197.6.226',
    port: 28432,
    username: 'AFK_24x7'
  })

  bot.on('spawn', () => {
    console.log('Bot Joined!')
  })

  bot.on('end', () => {
    console.log('Disconnected, reconnecting...')
    setTimeout(createBot, 5000)
  })
}

createBot()
