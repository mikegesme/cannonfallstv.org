import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
// import Watch from './Watch'

const NotFound = () => <h1>Sorry, this page was not found.</h1>

const Watch = () => <h1>Watch this!</h1>

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/watch" component={Watch} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))
