require("dotenv").config()
const { Telegraf } = require("telegraf")

const token = process.env.BOT_TOKEN
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(token)

bot.start(ctx => {
  ctx.reply("Serverless function tutorial")
})

exports.handler = async (event, context) => {
  console.log(event);
  console.log(event.body);
  return {
    statusCode: 200,
    body: "OK",
  }
}
