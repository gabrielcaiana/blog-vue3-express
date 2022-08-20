import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import routes from './routes'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(routes)

app.listen('8000', () => {
  console.log('Server started on port 8000')
})