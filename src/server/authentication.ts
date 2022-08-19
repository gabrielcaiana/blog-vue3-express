import express, { Request, Response } from 'express'
import jsonwebtoken from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cookieParser())

const SECRET = "my-secret"
const COOKIE = "vuejs-jwt"

export const authenticate = (id: string, _req: Request, res: Response) => {
  const token = jsonwebtoken.sign({id}, SECRET, {
    issuer: 'vuejs-blog',
    expiresIn: '30 days'
  })
  res.cookie(COOKIE, token, {httpOnly: true})
}

