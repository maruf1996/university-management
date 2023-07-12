import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/modules/user/user.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', router)

// Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
