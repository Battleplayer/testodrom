import React, {Component} from 'react';
import './App.css'
//import { connect } from 'react-redux';
import Header from "./components/Header/header";
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import Home from './components/Home'
import Page1 from './components/Page1'
import About from './components/About'
import Main from "./components/Main";
import Footer from "./components/Footer/footer";

class App extends Component {
        render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/main" component={Main} addValue/>
                        <Route path="/page1" component={Page1}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
