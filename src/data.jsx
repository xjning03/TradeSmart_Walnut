import React, { useState } from "react";

export const stockData = [
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
    },
    {
        symbol: "GOOG",
        name: "Google LLC",
        price: 2800.00,
        change: -10.50,
        percentageChange: "-0.37%",
        volume: "1.2M",
        avgVolume: "1.1M",
        marketCap: "1.8T",
        peRatio: 30.45,
        fraudulentPossibility: "6%"
    },
    {
        symbol: "NVDA",
        name: "NVIDIA Corporation",
        price: 220.50,
        change: 5.75,
        percentageChange: "+2.68%",
        volume: "5.6M",
        avgVolume: "4.9M",
        marketCap: "500.34B",
        peRatio: 89.21,
        fraudulentPossibility: "12%"
    },
    {
        symbol: "AMC",
        name: "AMC Entertainment Holdings Inc.",
        price: 40.25,
        change: -1.80,
        percentageChange: "-4.29%",
        volume: "10.2M",
        avgVolume: "8.7M",
        marketCap: "5.67B",
        peRatio: 12.34,
        fraudulentPossibility: "20%"
    },
    {
        symbol: "NVAX",
        name: "Novavax Inc.",
        price: 180.50,
        change: 5.75,
        percentageChange: "+3.29%",
        volume: "3.6M",
        avgVolume: "2.9M",
        marketCap: "15.78B",
        peRatio: 45.67,
        fraudulentPossibility: "8%"
    },
    {
        symbol: "UBER",
        name: "Uber Technologies Inc.",
        price: 45.80,
        change: 0.90,
        percentageChange: "+2.00%",
        volume: "6.5M",
        avgVolume: "5.8M",
        marketCap: "75.34B",
        peRatio: 56.78,
        fraudulentPossibility: "5%"
    },
    {
        symbol: "PYPL",
        name: "PayPal Holdings Inc.",
        price: 250.75,
        change: 3.20,
        percentageChange: "+1.29%",
        volume: "4.3M",
        avgVolume: "3.9M",
        marketCap: "300.45B",
        peRatio: 45.67,
        fraudulentPossibility: "3%"
    },
    {
        symbol: "DIS",
        name: "The Walt Disney Company",
        price: 150.50,
        change: -2.75,
        percentageChange: "-1.79%",
        volume: "12.3M",
        avgVolume: "11.6M",
        marketCap: "350.67B",
        peRatio: 34.56,
        fraudulentPossibility: "2%"
    },
    {
        symbol: "JPM",
        name: "JPMorgan Chase & Co.",
        price: 160.25,
        change: 1.50,
        percentageChange: "+0.95%",
        volume: "8.9M",
        avgVolume: "7.5M",
        marketCap: "450.34B",
        peRatio: 12.34,
        fraudulentPossibility: "1%"
    },
    {
        symbol: "V",
        name: "Visa Inc.",
        price: 220.80,
        change: -0.20,
        percentageChange: "-0.09%",
        volume: "5.4M",
        avgVolume: "4.8M",
        marketCap: "500.67B",
        peRatio: 45.67,
        fraudulentPossibility: "4%"
    },
    {
        symbol: "BABA",
        name: "Alibaba Group Holding Limited",
        price: 180.00,
        change: 2.50,
        percentageChange: "+1.41%",
        volume: "7.2M",
        avgVolume: "6.5M",
        marketCap: "600.34B",
        peRatio: 56.78,
        fraudulentPossibility: "6%"
    },
    {
        symbol: "NKE",
        name: "Nike, Inc.",
        price: 170.25,
        change: -1.20,
        percentageChange: "-0.70%",
        volume: "9.8M",
        avgVolume: "8.5M",
        marketCap: "200.45B",
        peRatio: 34.56,
        fraudulentPossibility: "3%"
    },
    {
        symbol: "CRM",
        name: "Salesforce.com, Inc.",
        price: 250.50,
        change: 4.75,
        percentageChange: "+1.93%",
        volume: "6.7M",
        avgVolume: "5.9M",
        marketCap: "300.67B",
        peRatio: 45.67,
        fraudulentPossibility: "2%"
    }
];

export const cryptoData = [
    {
        symbol: "BITCN",
        name: "Bitcoin",
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
        symbol: "ETH",
        name: "Ethereum",
        price: 180.25,
        change: 2.15,
        percentageChange: "1.21%",
        volume: "45.678M",
        avgVolume: "30.123M",
        marketCap: "20.345B",
        peRatio: "N/A",
        fraudulentPossibility: "15%"
    },
    {
        symbol: "XRP",
        name: "Ripple",
        price: 0.25,
        change: -0.05,
        percentageChange: "-16.67%",
        volume: "10.987M",
        avgVolume: "5.432M",
        marketCap: "8.765B",
        peRatio: "N/A",
        fraudulentPossibility: "5%"
    },
    {
        symbol: "LTC",
        name: "Litecoin",
        price: 45.67,
        change: 0.89,
        percentageChange: "1.99%",
        volume: "2.345M",
        avgVolume: "1.234M",
        marketCap: "3.456B",
        peRatio: "N/A",
        fraudulentPossibility: "10%"
    },
    {
        symbol: "DOGE",
        name: "Dogecoin",
        price: 0.01,
        change: 0.00,
        percentageChange: "0.00%",
        volume: "0.123M",
        avgVolume: "0.098M",
        marketCap: "0.987B",
        peRatio: "N/A",
        fraudulentPossibility: "1%"
    },
    {
        symbol: "ADA",
        name: "Cardano",
        price: 0.10,
        change: -0.02,
        percentageChange: "-16.67%",
        volume: "0.456M",
        avgVolume: "0.234M",
        marketCap: "0.567B",
        peRatio: "N/A",
        fraudulentPossibility: "2%"
    },
    {
        symbol: "BNB",
        name: "Binance Coin",
        price: 400.50,
        change: 10.25,
        percentageChange: "+2.63%",
        volume: "5.6M",
        avgVolume: "4.9M",
        marketCap: "90.34B",
        peRatio: "N/A",
        fraudulentPossibility: "7%"
    },
    {
        symbol: "SOL",
        name: "Solana",
        price: 150.75,
        change: 5.80,
        percentageChange: "+4.00%",
        volume: "3.2M",
        avgVolume: "2.8M",
        marketCap: "40.67B",
        peRatio: "N/A",
        fraudulentPossibility: "3%"
    },
    {
        symbol: "DOT",
        name: "Polkadot",
        price: 30.25,
        change: -0.50,
        percentageChange: "-1.63%",
        volume: "2.5M",
        avgVolume: "2.1M",
        marketCap: "25.34B",
        peRatio: "N/A",
        fraudulentPossibility: "2%"
    },
    {
        symbol: "LINK",
        name: "Chainlink",
        price: 25.80,
        change: 1.20,
        percentageChange: "+4.88%",
        volume: "1.8M",
        avgVolume: "1.5M",
        marketCap: "20.45B",
        peRatio: "N/A",
        fraudulentPossibility: "1%"
    },
    {
        symbol: "UNI",
        name: "Uniswap",
        price: 35.50,
        change: -0.75,
        percentageChange: "-2.07%",
        volume: "1.2M",
        avgVolume: "1.1M",
        marketCap: "15.67B",
        peRatio: "N/A",
        fraudulentPossibility: "4%"
    },
    {
        symbol: "XLM",
        name: "Stellar",
        price: 0.35,
        change: 0.02,
        percentageChange: "+6.06%",
        volume: "0.9M",
        avgVolume: "0.8M",
        marketCap: "10.34B",
        peRatio: "N/A",
        fraudulentPossibility: "2%"
    },
    {
        symbol: "EOS",
        name: "EOS",
        price: 5.80,
        change: -0.10,
        percentageChange: "-1.69%",
        volume: "0.7M",
        avgVolume: "0.6M",
        marketCap: "8.56B",
        peRatio: "N/A",
        fraudulentPossibility: "3%"
    },
    {
        symbol: "XMR",
        name: "Monero",
        price: 200.25,
        change: 3.50,
        percentageChange: "+1.78%",
        volume: "0.5M",
        avgVolume: "0.4M",
        marketCap: "6.78B",
        peRatio: "N/A",
        fraudulentPossibility: "1%"
    },
    {
        symbol: "XTZ",
        name: "Tezos",
        price: 7.50,
        change: -0.20,
        percentageChange: "-2.60%",
        volume: "0.4M",
        avgVolume: "0.3M",
        marketCap: "5.67B",
        peRatio: "N/A",
        fraudulentPossibility: "2%"
    },
    {
        symbol: "ATOM",
        name: "Cosmos",
        price: 15.80,
        change: 0.40,
        percentageChange: "+2.60%",
        volume: "0.3M",
        avgVolume: "0.2M",
        marketCap: "4.56B",
        peRatio: "N/A",
        fraudulentPossibility: "1%"
    }
];

// Function to filter stock data
export const filterStockData = (searchQuery) => {
    return stockData.filter((rowData) =>
        rowData.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rowData.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
};

// Function to filter crypto data
export const filterCryptoData = (searchQuery) => {
    return cryptoData.filter((rowData) =>
        rowData.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rowData.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
};

const StockCryptoData = () => {
    // This component can be empty as it's just used to export the data
    return null;
}

export default StockCryptoData;