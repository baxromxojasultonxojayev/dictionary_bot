const translate = require('@vitalets/google-translate-api');


module.exports = async (message, bot, db, ) =>{
  const data = message.data
  const chatId = message.from.id
  const text = message.message.text
  let user = await db.findUser(chatId)

  let translated_word = await translate(text, {to: data})
  console.log(translated_word);
  await bot.editMessageText(translated_word.text,{
    chat_id:chatId,
    message_id: message.message.message_id
  })
}