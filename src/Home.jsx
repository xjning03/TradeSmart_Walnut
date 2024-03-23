import React, { useState } from 'react';
import { filterStockData, filterCryptoData } from './data';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './Home.css';

function SearchBar({setSearchQuery}) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={handleChange}
        style={{ width: "250px" }} 
      />
    </div>
  );
}

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  const [navItem, setNavItem] = useState('Stock');
  const handleNavItemClick = (item) => {
      setNavItem(item);
  };

  const filteredStockData = filterStockData(searchQuery);
  const filteredCryptoData = filterCryptoData(searchQuery);

  return (
    <div className="Home" id="Home">
      <div className="search-bar-container">
        <SearchBar setSearchQuery={setSearchQuery}/>
      </div>

      <div className={`form-box`}>
        <div className={`button-box`}>
          <button
            onClick={() => handleNavItemClick('Stock')}
            className={`stockButton ${navItem === 'Stock' ? "selected" : ""}`}
          >
            Stock
          </button>
          <button
            onClick={() => handleNavItemClick('Crypto')}
            className={`cryptoButton ${navItem === 'Crypto' ? "selected" : ""}`}
          >
            Crypto
          </button>
        </div>
      </div>

      <div className='content-display'>
        {navItem === 'Stock' && (
          <div className="table-container">
          <table className="list-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Price (Intraday)</th>
                <th>Change</th>
                <th>%Change</th>
                <th>Volume</th>
                <th>Avg Vol (3 month)</th>
                <th>Market Cap</th>
                <th>PE Ratio (TTM)</th>
                <th>Fraudulent Possibility</th>
              </tr>
            </thead>
            <tbody>
            {filteredStockData.map((rowData, index) => (
                <tr key={index}>
                  <td className="symbol-text">
                    <Link to={`/tradingDetailed`}>{rowData.symbol}</Link>                  
                  </td>
                  <td><Link to={`/tradingDetailed`}>{rowData.name}</Link></td>
                  <td className="bold-text">{rowData.price}</td>
                  <td className={parseInt(rowData.change) > 0 ? "red-text" : "green-text"}>{rowData.change}</td>
                  <td className={parseInt(rowData.change) > 0 ? "red-text" : "green-text"}>{rowData.percentageChange}</td>
                  <td>{rowData.volume}</td>
                  <td>{rowData.avgVolume}</td>
                  <td>{rowData.marketCap}</td>
                  <td>{rowData.peRatio}</td>
                  <td className={parseInt(rowData.fraudulentPossibility) > 40 ? "red-text" : ""}>
                    {rowData.fraudulentPossibility}
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
        )}
        {navItem === 'Crypto' && (
          <div className="table-container">
          <table className="list-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Price (Intraday)</th>
                <th>Change</th>
                <th>%Change</th>
                <th>Volume</th>
                <th>Avg Vol (3 month)</th>
                <th>Market Cap</th>
                <th>PE Ratio (TTM)</th>
                <th>Fraudulent Possibility</th>
              </tr>
            </thead>
            <tbody>
            {filteredCryptoData.map((rowData, index) => (
                <tr key={index}>
                  <td className="symbol-text">
                    <Link to={`/tradingDetailed`}>{rowData.symbol}</Link>                  
                  </td>
                  <td><Link to={`/tradingDetailed`}>{rowData.name}</Link></td>
                  <td className="bold-text">{rowData.price}</td>
                  <td className={parseInt(rowData.change) > 0 ? "red-text" : "green-text"}>{rowData.change}</td>
                  <td className={parseInt(rowData.change) > 0 ? "red-text" : "green-text"}>{rowData.percentageChange}</td>
                  <td>{rowData.volume}</td>
                  <td>{rowData.avgVolume}</td>
                  <td>{rowData.marketCap}</td>
                  <td>{rowData.peRatio}</td>
                  <td className={parseInt(rowData.fraudulentPossibility) > 40 ? "red-text" : ""}>
                    {rowData.fraudulentPossibility}
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
        )}
      </div>
    </div>
  )
}

export default Home;