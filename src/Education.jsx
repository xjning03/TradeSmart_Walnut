import React from 'react';
import './Education.css';
import { Link } from 'react-router-dom';

function Education(){
    const fraudulentContainers = [
        { 
            type: 'Market Manipulation',
            description: 'This encompasses various tactics aimed at manipulating the price or volume of a security for fraudulent gain. AI algorithms can analyze market data, such as order book dynamics, trade volumes, and price movements, to identify anomalous patterns that may indicate market manipulation.',
            url: "https://i.ibb.co/tYqJz3H/market-manipulation.png",
            tips: [
                'Be cautious of sudden spikes or drops in price without apparent news or fundamentals supporting the movement.',
                'Stay informed about regulatory changes and enforcement actions related to market manipulation.'
            ]
        },
        { 
            type: 'Spoofing',
            description: 'Spoofing involves placing large buy or sell orders with the intent to cancel them before they are executed, creating a false impression of supply or demand in the market. AI algorithms can analyze order book data and detect patterns indicative of spoofing behavior, such as rapidly entering and canceling orders.',
            url: "https://i.ibb.co/xSvCMnt/spoofing.jpg",
            tips: [
                'Use limit orders instead of market orders to reduce the risk of falling victim to spoofing.',
                'Monitor order book depth and liquidity to detect potential spoofing activities.'
            ]
        },
        { 
            type: 'Account Takeover',
            description: 'This occurs when unauthorized individuals gain access to an investor\'s brokerage account and execute fraudulent trades. AI algorithms can analyze account activity data, such as login times, IP addresses, and trading patterns, to detect anomalies indicative of account takeover attempts.',
            url: "https://i.ibb.co/b7LjSFt/account-takeover.png",
            tips: [
                'Use strong, unique passwords and enable two-factor authentication for brokerage accounts.',
                'Regularly monitor account activity for any unauthorized transactions or changes.'
            ]
        },
        { 
            type: 'Layering',
            description: 'This involves placing multiple buy or sell orders with the intent to manipulate the price of a security. AI algorithms can analyze order book dynamics and detect patterns suggestive of layering activities, such as placing and canceling orders in quick succession at different price levels.',
            url: 'https://i.ibb.co/mTpQ00Q/layering.webp',
            tips: [
                'Implement trading controls and restrictions to prevent excessive order placement and cancellation.',
                'Leverage advanced trading surveillance tools to detect and investigate potential layering activities.'
            ]
        },
        { 
            type: 'Pump and Dump Schemes',
            description: 'In this scheme, fraudsters artificially inflate the price of a stock through false or misleading statements to attract investors, then sell off their shares at the inflated price. AI algorithms can analyze trading volumes, price movements, and social media chatter to identify suspicious patterns indicative of pump and dump schemes.',
            url: "https://i.ibb.co/RyGnHCN/pump-dump.jpg",
            tips: [
                'Conduct thorough due diligence and research before investing in stocks promoted through unsolicited messages or pump-and-dump schemes.',
                'Monitor trading volumes and price movements for any signs of abnormal activity.'
            ]
        },
        { 
            type: 'Front Running',
            description: 'This involves a broker executing orders on a security for its own account while taking advantage of advance knowledge of pending orders from its customers. AI algorithms can analyze order flow data and detect patterns that indicate front running activities, such as consistently executing trades ahead of large client orders.',
            url: 'https://i.ibb.co/dQ4KV5D/font-running.png',
            tips: [
                'Use brokers that have strong ethical standards and transparent execution policies to mitigate the risk of front running.',
                'Report any suspicious or unethical behavior observed in trading activity to regulatory authorities.'
            ]
        }
    ];

    return (
        <div className='Education' id="Education">
            <div className='container'>
                <header>
                    <h1>Understanding Fraudulent Trading</h1>
                </header>
                <nav>
                    <p>Table of Contents</p>
                    {fraudulentContainers.map((container, index) => (
                        <a key={index} href={`#${container.type.replace(/\s+/g, '')}`}>
                            {container.type}
                        </a>
                    ))}
                </nav>
                <div className='content'>
                    {fraudulentContainers.map((container, index) => (
                        <div key={index} className='fraudulent-container' id={container.type.replace(/\s+/g, '')}>
                            <img src={container.url} className='fraudulent-img' alt={container.type} />
                            <span>
                                <h2 className='fraudulent-type'>{container.type}</h2>
                                <p className='fraudulent-desc'>{container.description}</p>
                                <div className='tips'>
                                    <h3>Tips to Prevent:</h3>
                                    <ul>
                                        {container.tips.map((tip, idx) => (
                                            <li key={idx}>{tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            </span>
                        </div>
                    ))}
                    <div className='report'>
                        <h2>Facing any Fradulent Trading?</h2>
                        <Link to="/report" className='Link'>
                            <button className="btn">
                            Make report
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
