import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {hot} from "react-hot-loader";


import {ROUTES} from "../constants/routes";

import Navbar from "../components/Navbar";
import Home from "./Home";

class App extends Component {
    componentDidMount() {
    }

    render() {
        return <div>
            <Navbar/>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
            </Switch>
        </div>;
    }
}

export default hot(module)(App);
