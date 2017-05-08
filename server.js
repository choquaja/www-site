const express = require('express')
const next = require('next')
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const redirects = require('./redirects')

const rootStaticFiles = [
  '/favicon.ico',
  '/favicon-16x16.png',
]

app.prepare()
  .then(() => {
    const server = express()

    redirects.forEach(({from, to, type = 301, method = 'get'}) => {
      server[method](from, (req, res) => {
        res.redirect(type, to)
      })
    })

    const options = { root: join(__dirname, 'static') }
    rootStaticFiles.forEach(file => {
      server.get(file, (req, res) => {
        res.sendFile(file.slice(1), options)
      })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
