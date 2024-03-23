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