import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

function News() {
  return (
    <div className='News' id='News'>
      <div className='nav' id='nav'>
        <Link to="/newsSection/stockMarketNews">Stock Market News</Link>
        <Link to="/newsSection/earnings">Earnings</Link>
        <Link to="/newsSection/politics">Politics</Link>
        <Link to="/newsSection/fraudulentTrading">Fraudulent Trading</Link>
        <Link to="/newsSection/economicNews">Economic News</Link>
        <Link to="/newsSection/cryptoNews">Crypto News</Link>
      </div>
    </div>
  );
}

export default News;
