import React from 'react';
import './App.scss';
import { HashRouter, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import Header from './components/Header';
import Categories from './components/Categories';
import configureStore from './store';
import Jokes from './components/Jokes';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HashRouter basename="/">
                    <Header/>
                    <div className="App-body" data-test="app">
                        <Route path="/" exact component={Categories} />
                        <Route path="/jokes/:category" exact component={Jokes} />
                    </div>
                </HashRouter>
            </div>
        </Provider>
    );
}

export default App;
