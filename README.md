# netlify telegram bot

## aws lamda
```js
exports.handler = async (event, context) => {
  const tmp = JSON.parse(event.body)
  bot.handleUpdate(tmp)
  return {
    statusCode: 200,
    body: "",
  }
}
```

## set telegram webhook
https://api.telegram.org/bot{telegram_bot_api_secret}/setWebhook?url={url_for_post_requests}

## delete telegram webhook
https://api.telegram.org/bot{telegram_bot_api_secret}/setWebhook

