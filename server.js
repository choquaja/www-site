const {createServer} = require('http')
const {parse} = require('url')
const next = require('next')
const pathMatch = require('path-match')
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const route = pathMatch()
const match = route('/about/:name')

app.prepare()
    .then(() => {
        createServer((req, res) => {
            const {pathname} = parse(req.url)
            const params = match(pathname)
            const parsedUrl = parse(req.url, true)
            const rootStaticFiles = [
              '/favicon.ico',
            ]
            if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
              const path = join(__dirname, 'static', parsedUrl.pathname)
              app.serveStatic(req, res, path)
            } else {
              handle(req, res, parsedUrl)
            }
        })
            .listen(3000, (err) => {
                if (err) throw err
                console.log('> Ready on http://localhost:3000')
            })
    })
