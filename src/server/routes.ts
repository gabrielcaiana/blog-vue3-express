import express from 'express'
const routes = express.Router()
import { Post, today, thisWeek, thisMonth } from '../interfaces/posts'
import { NewUser, User } from '../interfaces/user'

const allPosts = [today, thisWeek, thisMonth]
const allUsers: User[] = []

routes.get("/posts", (_req, res) => {
  res.json(allPosts)
})

routes.post<Post>("/posts", (req, res) => {
  const post = { ...req.body, id:( Math.random() * 100000).toFixed()}
  allPosts.push(post)
  res.json(post)
})

routes.post<NewUser>("/users", (req, res) => {
  const user: User = { ...req.body, id:( Math.random() * 100000).toFixed()}
  allUsers.push(user)
  const { password, ...rest } = user
  res.json(rest)
})

export default routes