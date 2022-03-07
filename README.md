# netlify telegram bot

## aws lamda
```js
exports.handler = async (event, context) => {
  if(event.body === "") {
    return {
      statusCode: 200,
      body: "OK",
    }
  }

  const tmp = JSON.parse(event.body)
  await bot.handleUpdate(tmp)
  return {
    statusCode: 200,
    body: "OK",
  }
}
```

## set telegram webhook
https://api.telegram.org/bot{telegram_bot_api_secret}/setWebhook?url={url_for_post_requests}

## delete telegram webhook
https://api.telegram.org/bot{telegram_bot_api_secret}/setWebhook

