import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Game from './components/Game'
import { Nav } from './components/Nav'
import NameForm from './components/Input'

const App = () => (

    <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/game" component={Game} />
                <Route path="/form" component={NameForm} />
            </Switch>
        </div>
    </Router>

)

export default App;
