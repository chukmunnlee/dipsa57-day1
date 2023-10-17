const express = require('express')
const { engine } = require('express-handlebars')

// Port to listen to
const PORT = parseInt(process.env.PORT) || 3000

// Create an instance of express
const app = express()

app.listen(PORT, () => {
   console.info(`Application started on port ${PORT} at ${new Date()}`)
})