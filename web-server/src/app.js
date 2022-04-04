import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import hbs from 'hbs'

//app.com
//app.com/help
//app.com/about
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//setup static directory
const staticContentPath = path.join(__dirname, '../public')
app.use(express.static(staticContentPath))

//setup handlebars
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
  res.render('index', {
    title: 'My weather',
    name: 'David Garcia',
  })
})
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'David Garcia',
  })
})
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'David Garcia',
    helpText: 'This is some helpful text.',
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Its 25 degrees',
    Location: 'Madrid',
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'David Garcia',
    errorMessage: 'Help article not found',
  })
})
app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'David Garcia',
    errorMessage: 'Page Not Found',
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
