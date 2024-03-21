import React, { useState } from "react";
import "./Home.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." style={{ width: "250px" }} />
    </div>
  );
}

function Home() {
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

  const tableData = [
    {
      symbol: "SOUN",
      name: "SoundHound AI, Inc.",
      price: 7.93,
      change: -0.40,
      percentageChange: "-4.80%",
      volume: "88.605M",
      avgVolume: "55.298M",
      marketCap: "2.451B",
      peRatio: "N/A",
      fraudulentPossibility: "33%"
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 2900.00,
      change: 20.50,
      percentageChange: "+0.71%",
      volume: "1.5M",
      avgVolume: "1.3M",
      marketCap: "1.93T",
      peRatio: 28.32,
      fraudulentPossibility: "45%"
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
      fraudulentPossibility: "68%"
    },
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 175.32,
      change: -1.20,
      percentageChange: "-0.68%",
      volume: "50.6M",
      avgVolume: "45.2M",
      marketCap: "2.55T",
      peRatio: 28.21,
      fraudulentPossibility: "2%"
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 3200.00,
      change: 30.25,
      percentageChange: "+0.95%",
      volume: "2.2M",
      avgVolume: "2.5M",
      marketCap: "1.61T",
      peRatio: 61.75,
      fraudulentPossibility: "4%"
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 840.00,
      change: 15.50,
      percentageChange: "+1.88%",
      volume: "12.8M",
      avgVolume: "11.5M",
      marketCap: "813.45B",
      peRatio: 284.65,
      fraudulentPossibility: "37%"
    },
    {
      symbol: "FB",
      name: "Meta Platforms Inc.",
      price: 300.50,
      change: -2.75,
      percentageChange: "-0.91%",
      volume: "18.3M",
      avgVolume: "16.7M",
      marketCap: "857.34B",
      peRatio: 25.98,
      fraudulentPossibility: "3%"
    },
    {
      symbol: "NFLX",
      name: "Netflix Inc.",
      price: 400.25,
      change: 7.80,
      percentageChange: "+1.99%",
      volume: "8.7M",
      avgVolume: "9.2M",
      marketCap: "177.81B",
      peRatio: 50.71,
      fraudulentPossibility: "86%"
    },
    {
      symbol: "T",
      name: "AT&T Inc.",
      price: 27.80,
      change: 0.40,
      percentageChange: "+1.46%",
      volume: "55.2M",
      avgVolume: "58.1M",
      marketCap: "197.45B",
      peRatio: 8.45,
      fraudulentPossibility: "1%"
    }
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
    </div>
  );
}

export default Home;
