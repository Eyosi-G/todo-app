import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import AddEditTask from './pages/AddEditTask'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/create">
          <AddEditTask/>
        </Route>
        <Route path="/edit">
          <AddEditTask/>
        </Route>
        <Route>
          <Home/>
        </Route>

      </Switch>
    </Router>
  )
}

export default App
