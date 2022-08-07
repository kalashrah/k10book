const express = require('express')
const app = express()

const port = 3000
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  console.log(app.response.statusCode)
  res.send('#############')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})