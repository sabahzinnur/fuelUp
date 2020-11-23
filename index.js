require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const homeRoutes =  require('./routes/home')
const pricesRoutes =  require('./routes/prices')
const stationsRoutes =  require('./routes/stations')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/',homeRoutes)
app.use('/prices', pricesRoutes)
app.use('/stations', stationsRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
