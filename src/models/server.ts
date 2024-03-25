import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import * as userRoute from '../routes/users.routes'
import * as roleRoute from '../routes/roles.routes'
import * as authRoute from '../routes/auth.routes'

class Server {
  public app: Application
  public port: number | undefined
  public usersPath: string
  public rolesPath: string
  public authPath: string

  constructor () {
    this.app = express()
    this.port = Number(process.env.PORT)
    this.usersPath = '/api/users'
    this.rolesPath = '/api/roles'
    this.authPath = '/api/auth'

    // Middlewares
    this.middlewares()

    // Routes
    this.routes()
  }

  private middlewares (): void {
    // CORS
    this.app.use(cors())

    // Morgan
    this.app.use(morgan('dev'))

    // Parse and read body
    this.app.use(express.json())

    // Cookie parser
    this.app.use(cookieParser())

    // Public directory
    this.app.use(express.static('public'))
  }

  private routes (): void {
    this.app.use(this.usersPath, userRoute.default)
    this.app.use(this.rolesPath, roleRoute.default)
    this.app.use(this.authPath, authRoute.default)
  }

  public listen (): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${Number(this.port)}`)
    })
  }
}

export default Server
