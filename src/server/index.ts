import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { Post, today, thisWeek, thisMonth } from '../interfaces/posts'
import { NewUser, User } from '../interfaces/user'

const app = express()
app.use(cors())
app.use(bodyParser.json())

const allPosts = [today, thisWeek, thisMonth]
const allUsers: User[] = []

app.get("/posts", (_req, res) => {
  res.json(allPosts)
})

app.post<Post>("/posts", (req, res) => {
  const post = { ...req.body, id:( Math.random() * 100000).toFixed()}
  allPosts.push(post)
  res.json(post)
})

app.post<NewUser>("/users", (req, res) => {
  const user: User = { ...req.body, id:( Math.random() * 100000).toFixed()}
  allUsers.push(user)
  const { password, ...rest } = user
  res.json(rest)
})

app.listen('8000', () => {
  console.log('Server started on port 8000')
})