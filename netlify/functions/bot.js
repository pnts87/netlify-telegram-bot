require("dotenv").config()
const { Telegraf } = require("telegraf")
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
  ctx.reply("Serverless function tutorial")
})

// bot.launch()

exports.handler = async (event, context) => {
  const tmp = JSON.parse(event.body)
  bot.handleUpdate(tmp)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "RUNNING"}),
  }
}


