module.exports = async (message, bot, db, ) =>{
  const chatId = message.chat.id
  const messageId = message.message_id
  const name = message.from.first_name
  const text = message.text

  let user = await db.findUser(chatId)
  if(!user) {
    await db.createUser(chatId)
    await bot.sendMessage(chatId, `Assalomu alaykum.Ushbu BOT sizga tarjimasi kerak bolgan sozlarni siz hoxlagan tilga ogirib berishga xizmat qilish uchun yaratildi ). Endi esa So'zni kiriting!`)
  }else{

    const keyboard = {
      inline_keyboard: [
        [
          {
            text: 'UZB',
            callback_data: 'uz'
          },
          {
            text: 'RUS',
            callback_data: 'ru'
          }
        ],
        [
          {
            text: 'ENG',
            callback_data: 'en'
          },
          {
            text: 'ARAB',
            callback_data: 'ar'
          }
        ]
      ]
    }
    await db.setText(chatId, text)
    await bot.sendMessage(chatId, text, {
      reply_markup: keyboard
    })
  }
}