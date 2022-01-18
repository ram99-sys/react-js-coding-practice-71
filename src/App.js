import {Route, Switch} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <div className="app-container">
    <Header />
    <div className="app-body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
