import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-branch">
                    <Link className="App-link" to="/" >Chuck Norris Facts</Link>
                </h1>
            </header>
        );
    }
}

export default Header;