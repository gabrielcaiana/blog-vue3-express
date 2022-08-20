import express from 'express'
const routes = express.Router()
import jsonwebtoken from 'jsonwebtoken'
import { Post, today, thisWeek, thisMonth } from '~/interfaces/posts'
import { NewUser, User } from '~/interfaces/user'
import { authenticate, COOKIE, SECRET } from './authentication'

const allPosts = [today, thisWeek, thisMonth]
const allUsers: User[] = []

routes.get("/posts", (_req, res) => {
  res.json(allPosts)
 })
 
 routes.get("/current-user", (req, res) => {
  try {
    const token = req.cookies[COOKIE]
    const result = jsonwebtoken.verify(token, SECRET) as {id: string}
    res.json({ id: result.id })
  } catch(e) {
    res.status(404).end()
  }
 })

 routes.post('/logout', (_req, res) => {
  res.cookie(COOKIE, "", { httpOnly: true })
  res.status(200).end()
 })

routes.post<Post>("/posts", (req, res) => {
  const post = { ...req.body, id:( Math.random() * 100000).toFixed()}
  allPosts.push(post)
  res.json(post)
})

routes.post<{}, {}, NewUser>("/users", (req, res) => {
  const user: User = { ...req.body, id:( Math.random() * 100000).toFixed()}
  allUsers.push(user)
  authenticate(user.id, req, res)
  const { password, ...rest } = user
  res.json(rest)
})

export default routes
