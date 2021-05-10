const telegramBot = require('node-telegram-bot-api')
require('dotenv').config()


const TOKEN = process.env.TOKEN
const bot = new telegramBot(TOKEN , {
  polling: true
})

const Database = require('./base')
const CallBackController = require('./controller/CallBackController')
const TextController = require('./controller/TextController')

const db = new Database(`mongodb+srv://translation:baxromxoja_12@tranlationbot.gjd5t.mongodb.net/translation `)
bot.on('message', async (message) => {

  TextController(message, bot, db)

})

 bot.on('callback_query', async (callback_query)=>{
  await CallBackController(callback_query, bot, db)
 })