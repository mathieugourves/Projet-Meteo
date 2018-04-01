const express = require('express')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const bodyParser = require('body-parser')
const routes = require('./routes')

const port = process.env.PORT || 3000
const app = express()
const router = express.Router()

require('./passport')(passport)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'leprojetmusique'
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

routes(app, router, passport)

console.log(`Server started -> http://localhost:${port}`)
app.listen(port)