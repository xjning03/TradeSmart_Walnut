import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './CyptoList.css';

function CryptoList() {
    return (
        <div className="Home" id="Home">
          <div className="search-bar-container">
            <SearchBar />
            </div>
        </div>
    )
}