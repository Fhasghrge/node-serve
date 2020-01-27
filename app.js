let express = require('express')

let app = express()

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen('80', () => {
  console.log('running...')
})