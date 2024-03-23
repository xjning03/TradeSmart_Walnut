import React, { useState } from 'react';
import './TradingDetailed.css';
import logo from './assets/images/appleLogo.png';

function TradingDetailed() {
    const [navItem, setNavItem] = useState('Chart');

    const handleNavItemClick = (item) => {
        setNavItem(item);
    };

    return (
        <div className='TradingDetailed'>
            <div className='container'>
                <div className='company-container'>
                    <div className='company'>
                        <div className='logo'>
                            <img src={logo} alt="Apple-Inc"></img>
                        </div>
                        <h1 className='company-name'>Apple Inc.</h1>
                        <p className='stock-type'>Stock</p>
                    </div>
                    <div className='company-desc'>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='market-container'>
                    <p className='last-market-price'>62,238.00 <span>Last market price</span></p>
                    <p className='24h-change'>+1.75%<span>24h Change</span></p>
                    <p className='24h-high'>63597.80<span>24h High</span></p>
                    <p className='24h-low'>60,322.6<span>24h Low</span></p>
                    <p className='market-volume'>2,548,722,097.16<span>Market Volume</span></p>
                </div>
                <div className='AI-container'>
                    <h2>AI Suggestion</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='nav'>
                    <p onClick={() => handleNavItemClick('Chart')}>Chart</p>
                    <p onClick={() => handleNavItemClick('Historical Data')}>Historical Data</p>
                    <p onClick={() => handleNavItemClick('Fraud Breakdown')}>Fraud Breakdown</p>
                </div>
                <div className='content-display'>
                    {navItem === 'Chart' && (
                        <img src="https://i.ibb.co/XVnX14v/Chart.png" alt="Chart" border="0"></img>
                    )}
                    {navItem === 'Historical Data' && (
                        <div className='historical-data'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Open</th>
                                    <th>High</th>
                                    <th>Low</th>
                                    <th>Close*</th>
                                    <th>Adj Close*</th>
                                    <th>Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
                                <tr className='data'>
                                    <td className='date'>Mar 08, 2024</td>
                                    <td className='open'>16322.10</td>
                                    <td className='high'>16449.70</td>
                                    <td className='low'>16059.50</td>
                                    <td className='close'>16085.11</td>
                                    <td className='adj-close'>16085.11</td>
                                    <td className='volumen'>5411790000</td>
                                </tr>
        
                            </tbody>
                        </table>
                    </div>

                    )}
                    {navItem === 'Fraud Breakdown' && (
                       <div className='fraudulent'>
                       <div className='fraudulent-breakdown'>
                           <p className='insider-trading' id='insider-trading'>Insider Trading</p>
                           <div className='fraudulent-percent' style={{ width: '10%', backgroundColor: '#68a82c' }}>3%</div>
                       </div>
                       <div className='fraudulent-breakdown'>
                           <p className='pump-dump' id='pump-dump'>Pump and Dump Schemes</p>
                           <div className='fraudulent-percent' style={{ width: '5%', backgroundColor: '#68a82c' }}>5%</div> 
                       </div>
                       <div className='fraudulent-breakdown'>
                           <p className='front-running' id='front-running'>Front Running</p>
                           <div className='fraudulent-percent' style={{ width: '20%', backgroundColor: '#68a82c' }}>20%</div>
                       </div>
                       <div className='fraudulent-breakdown'>
                           <p className='market-manipulation' id='market-manipulation'>Market Manipulation</p>
                           <div className='fraudulent-percent' style={{ width: '62%', backgroundColor: '#f33232' }}>62%</div>
                       </div>
                       <div className='fraudulent-breakdown'>
                           <p className='spoofing' id='spoofing'>Spoofing</p>
                           <div className='fraudulent-percent' style={{ width: '6%', backgroundColor: '#68a82c' }}>6%</div>
                       </div>
                       <div className='fraudulent-breakdown'>
                           <p className='layering' id='layering'>Layering</p>
                           <div className='fraudulent-percent' style={{ width: '5%', backgroundColor: '#68a82c' }}>5%</div>
                       </div>
                       <div className='fraudulent-breakdown'>
                           <p className='account-takeover' id='account-takeover'>Account Takeover</p>
                           <div className='fraudulent-percent' style={{ width: '7%', backgroundColor: '#68a82c' }}>7%</div>
                       </div>
                   </div>   
                    )}
                </div>
                <h3 className='bottom-container-header'>Comment</h3>
                <div className='bottom-container'>
                    <div className='comment-container'>
                        <div className='profile'>
                            <div className='profile-img'></div>
                            <div className='profile-name'>Stella</div>
                        </div>
                        <div className='comment'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className='comment-container'>
                        <div className='profile'>
                            <div className='profile-img'></div>
                            <div className='profile-name'>Stella</div>
                        </div>
                        <div className='comment'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className='comment-container'>
                        <div className='profile'>
                            <div className='profile-img'></div>
                            <div className='profile-name'>Stella</div>
                        </div>
                        <div className='comment'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="form-comment">
                    <input
                        className='form-comment-input'
                        type='text'
                        id='comment'
                        name='comment'
                        placeholder='Write a comment...'
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TradingDetailed;
