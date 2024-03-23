import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.json({
    message: 'get API - controller'
  })
})

export default router
