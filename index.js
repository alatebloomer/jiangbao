const linebot = require('linebot');
const express = require('express')
const app = express()
const port = 

const bot = linebot({
  channelId: '1656718211',
  channelSecret: '65e2264b18c161d37bdb324c288c4372',
  channelAccessToken: 'TNIYI9izHfTZur7p1sWeSrG5ra0c96hoaP8EZ0L+5VDmS3sg7iuPagaoQSZsd4rJQLUycIHhYS3Gcisv9UiTW6USiuDZ5EeSl7AWvgICzW1b9TQLF6Vq3yCr6DwT1Xp1kwyLQWcHeSoVJmgYd0/GtwdB04t89/1O/w1cDnyilFU='
});

app.get('/linebot', (req, res) => {
  console.log(req.query.id)
  // bot.push('U54b713f0c785a0f73fa48d14a8405a36', 'this is a test')
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})