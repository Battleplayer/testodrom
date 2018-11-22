import React, {Component} from 'react';
import {BrowserRouter, Switch, Route,} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from './components/Home'
import Page from './components/Page'
import About from './components/About'
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
// import Events, {storeName} from'./Events'

import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    }
    // storeName = () => this.props.name(this.state.name);
    storeName = () => console.log('11');
        render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} value={'sas'} saveName={this.storeName}/>
                        <Route path="/about" component={About}/>
                        <Route path="/main" component={Main} />
                        <Route path="/page" component={Page}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
