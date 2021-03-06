import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Videos from './Videos'
import Watch from './Watch'

const NotFound = () => (
  <div>
    <Header />
    <h1>Sorry, this page was not found.</h1>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/videos" component={Videos} />
      <Route path="/watch/:id" component={Watch} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))
