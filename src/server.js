var express = require('express')
var React = require('react')
import { renderToString } from 'react-dom/server'
import App from './app'
import tmp from './t'

// var Router = require('react-router')
// var routes = require('./app/routes')
// var path = require('path')

const server = express()

// app.use('/static', express.static('../app/public'))
// server.use('/assets', express.static('assets'))


server.set('port', process.env.PORT || 3198)



server.get('/', (req, res) => {
  const isMobile = true
  const initialState = { isMobile }
  const appString = renderToString(<App {...initialState} />)

  res.send(tmp({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(initialState)
  }))
})


// server.use((req, res) => {
//   Router.run(routes, req.path, Handler => {
//     let html = React.renderToString(React.createElement(Handler))
//     let page = res.render('views/index.html', { html: html })
//     res.send(page)
//   })
// })

server.listen(server.get('port'), () => {
  console.log('Express server listening on port ' + server.get('port'))
})

