import React, { useState } from "react";
import "./Personalised.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." style={{ width: "250px" }} />
    </div>
  );
}

function Personalised() {
  const [isStockSelected, setIsStockSelected] = useState(true);
  const [isCryptoSelected, setIsCryptoSelected] = useState(false);

  const handleOnClick = () => {
    if (isStockSelected) {
      setIsStockSelected(false);
      setIsCryptoSelected(true);
    } else {
      setIsStockSelected(true);
      setIsCryptoSelected(false);
    }
  };

  const cryptoTableData = [
    {
      symbol: "BAO-USD",
      name: "Bao-Finance (old) USD",
      price: 0.00002,
      change: 0.0,
      percentageChange: "+0.766200%",
      marketCap: 0,
      volumeInCurrencyUTC: 0,
      volumeInCurrency24hr: 0,
      totalVolume: 0,
      circulatingSupply: 0,
    },
    {
      symbol: "BTC-USD",
      name: "Bitcoin",
      price: 52000.0,
      change: -150.0,
      percentageChange: "-0.29%",
      marketCap: 976.7e9,
      volumeInCurrencyUTC: 27620.11,
      volumeInCurrency24hr: 31200.55,
      totalVolume: 39200.0,
      circulatingSupply: 18735.125,
    },
    {
      symbol: "ETH-USD",
      name: "Ethereum",
      price: 1800.0,
      change: 30.0,
      percentageChange: "+1.69%",
      marketCap: 207.8e9,
      volumeInCurrencyUTC: 8950.0,
      volumeInCurrency24hr: 9720.0,
      totalVolume: 11500.0,
      circulatingSupply: 115.42e6,
    },
    {
      symbol: "ADA-USD",
      name: "Cardano",
      price: 1.2,
      change: -0.05,
      percentageChange: "-3.81%",
      marketCap: 38.4e9,
      volumeInCurrencyUTC: 950.0,
      volumeInCurrency24hr: 1020.0,
      totalVolume: 1200.0,
      circulatingSupply: 32.1e9,
    },
  ];

  const tableData = [
    {
      symbol: "SOUN",
      name: "SoundHound AI, Inc.",
      price: 7.93,
      change: -0.4,
      percentageChange: "-4.80%",
      volume: "88.605M",
      avgVolume: "55.298M",
      marketCap: "2.451B",
      peRatio: "N/A",
      fraudulentPossibility: "33%",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 2900.0,
      change: 20.5,
      percentageChange: "+0.71%",
      volume: "1.5M",
      avgVolume: "1.3M",
      marketCap: "1.93T",
      peRatio: 28.32,
      fraudulentPossibility: "45%",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: 330.25,
      change: 3.75,
      percentageChange: "+1.15%",
      volume: "25.8M",
      avgVolume: "27.1M",
      marketCap: "2.48T",
      peRatio: 38.51,
      fraudulentPossibility: "68%",
    },
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 175.32,
      change: -1.2,
      percentageChange: "-0.68%",
      volume: "50.6M",
      avgVolume: "45.2M",
      marketCap: "2.55T",
      peRatio: 28.21,
      fraudulentPossibility: "2%",
    },
  ];

  return (
    <div className="Home" id="Home">
      <div className="search-bar-container">
        <SearchBar />
      </div>

      <div className={`form-box`}>
        <div className={`button-box`}>
          <button
            onClick={handleOnClick}
            className={`stockButton ${isStockSelected ? "selected" : ""} `}
          >
            Stock
          </button>
          <button
            onClick={handleOnClick}
            className={`cryptoButton ${isCryptoSelected ? "selected" : ""} `}
          >
            Crypto
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="stocklist-table">
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
            {tableData.map((rowData, index) => (
              <tr key={index}>
                <td className="symbol-text">{rowData.symbol}</td>
                <td>{rowData.name}</td>
                <td className="bold-text">{rowData.price}</td>
                <td
                  className={
                    parseInt(rowData.change) < 0 ? "red-text" : "green-text"
                  }
                >
                  {rowData.change}
                </td>
                <td
                  className={
                    parseInt(rowData.percentageChange) < 0
                      ? "red-text"
                      : "green-text"
                  }
                >
                  {rowData.percentageChange}
                </td>
                <td>{rowData.volume}</td>
                <td>{rowData.avgVolume}</td>
                <td>{rowData.marketCap}</td>
                <td>{rowData.peRatio}</td>
                <td
                  className={
                    parseInt(rowData.fraudulentPossibility) > 40
                      ? "red-text"
                      : ""
                  }
                >
                  {rowData.fraudulentPossibility}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <table className="stocklist-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price (Intraday)</th>
              <th>Change</th>
              <th>%Change</th>
              <th>Market Cap</th>
              <th>Volume in Currency (Since 0:00 UTC)</th>
              <th>Volume in Currency (24Hr)</th>
              <th>Total Volume All Currencies (24Hr)</th>
              <th>Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            {cryptoTableData.map((rowData, index) => (
              <tr key={index}>
                <td className="symbol-text">{rowData.symbol}</td>
                <td>{rowData.name}</td>
                <td className="bold-text">{rowData.price}</td>
                <td
                  className={
                    parseInt(rowData.change) < 0 ? "red-text" : "green-text"
                  }
                >
                  {rowData.change}
                </td>
                <td
                  className={
                    parseInt(rowData.change) < 0 ? "red-text" : "green-text"
                  }
                >
                  {rowData.percentageChange}
                </td>

                <td>{rowData.marketCap}</td>
                <td>{rowData.volumeInCurrencyUTC}</td>
                <td>{rowData.volumeInCurrency24hr}</td>
                <td>{rowData.totalVolume}</td>
                <td>{rowData.circulatingSupply}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="10">
                Description: Add description of the stock here
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Personalised;
