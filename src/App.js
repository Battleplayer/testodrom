import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";

import Header from "./components/Header/Header";
import MainContainer from './containers/MainContainer';
import Footer from "./components/Footer/Footer";


import './App.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <MainContainer/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
