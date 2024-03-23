import express, { Application } from 'express'
import cors from 'cors'
import * as userRoute from '../routes/users'
import * as roleRoute from '../routes/roles'

class Server {
  public app: Application
  public port: number | undefined
  public usersPath: string
  public rolesPath: string

  constructor () {
    this.app = express()
    this.port = Number(process.env.PORT)
    this.usersPath = '/api/users'
    this.rolesPath = '/api/roles'

    // Middlewares
    this.middlewares()

    // Routes
    this.routes()
  }

  private middlewares (): void {
    // CORS
    this.app.use(cors())

    // Parse and read body
    this.app.use(express.json())

    // Public directory
    this.app.use(express.static('public'))
  }

  private routes (): void {
    this.app.use(this.usersPath, userRoute.default)
    this.app.use(this.rolesPath, roleRoute.default)
  }

  public listen (): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${Number(this.port)}`)
    })
  }
}

export default Server
