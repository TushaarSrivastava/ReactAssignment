import React from 'react'
import Header from '../common/header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './details/Details';
import Homepage from './homepage/Homepage';

function Controller() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/movie/:id" component={MovieDetails} />
                        <Route path="/" component={Homepage} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default Controller
