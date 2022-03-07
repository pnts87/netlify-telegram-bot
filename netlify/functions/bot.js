require("dotenv").config()
const { Telegraf } = require("telegraf")

const token = process.env.BOT_TOKEN
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(token, {
  telegram: { webhookReply: true },
})

bot.start(ctx => {
  ctx.reply("Serverless function tutorial")
})

exports.handler = async (event, context) => {
  // console.log(event);
  // console.log(event.body);
  let body = event.body
  console.log(body);
  const tmp = JSON.parse(event.body)
  await bot.handleUpdate(tmp)
  // const bodyObject = JSON.parse(body)
  // console.log(bodyObject);
  return {
    statusCode: 200,
    body: "OK",
  }
}
