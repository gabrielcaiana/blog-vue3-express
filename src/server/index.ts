import express from 'express'
import cors from 'cors'
import { today, thisWeek, thisMonth } from '../interfaces/posts'

const app = express()
app.use(cors())

app.get("/posts", (_req, res) => {
  res.json([today, thisWeek, thisMonth])
})

app.listen('8000', () => {
  console.log('Server started on port 8000')
})