require("dotenv").config()
const { Telegraf } = require("telegraf")
const makeHandler = require("lambda-request-handler")

const token = process.env.BOT_TOKEN
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(token, {
  telegram: { webhookReply: true }
})

bot.start(ctx => {
  ctx.reply("Serverless function tutorial")
})

// bot.launch()

exports.handler = makeHandler(
  bot.webhookCallback(process.env.WEBHOOK_PATH)
)
