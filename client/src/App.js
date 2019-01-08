import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {IntlProvider, addLocaleData} from 'react-intl'

import MainContainer from './containers/MainContainer';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import enLocale from 'react-intl/locale-data/en';
import ukLocale from 'react-intl/locale-data/uk';
import enMessages from './lang/en';
import ukMessages from './lang/uk';
import './App.css'

addLocaleData([...enLocale, ...ukLocale]);

const messages = {
    en: enMessages,
    uk: ukMessages,
};

class App extends Component {
    constructor() {
        super();
        this.state ={locale: 'en'}
    }
    changeLang = (e) => {
        this.setState({locale: e.target.value})
    };
    render() {
        const {locale} = this.state;
        return (
            <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
                <BrowserRouter>
                    <div className="App">
                        <select value={this.state.locale} onChange={this.changeLang}>
                            <option value='en'>eng</option>
                            <option value='uk'>uk</option>
                        </select>
                        <Header/>
                        <MainContainer/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </IntlProvider>
        );
    }
}

export default App;
