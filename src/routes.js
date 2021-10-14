import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Route 
} from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Purchase from './pages/Purchase'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/aboutme' component={AboutMe} />
                <Route path='/contact' component={Contact} />
                <Route path='/purchase' component={Purchase} />
            </Switch>
        </Router>
    )
}

export default Routes
