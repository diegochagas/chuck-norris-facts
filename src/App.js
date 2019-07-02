import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import Header from './components/Header';
import Categories from './components/Categories';
import configureStore from './store';
import Joke from './components/Joke';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <div className="App-body" data-test="app">
                        <Route path="/" exact component={Categories} />
                        <Route path="/joke/:category" exact component={Joke} />
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
