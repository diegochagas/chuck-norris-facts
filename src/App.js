import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Header from './components/Header';
import CategoriesList from './components/CategoriesList';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <div className="App-body" data-test="app">
                        <Route path="/" exact component={CategoriesList} />
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
