import React from 'react';
import './NewsDetailed.css';
import News from './News';

function NewsDetailed () {
    return (
        <div>
            <div className='NewsDetailed' id="NewsDetailed">
                <News />
                <div className='container' id='container'>
                    <div className='left-container' id='left-container'>
                        <header>
                            <h1 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h1>
                            <p className='news-time'>Oct 10, 2024 1:00 PM</p>
                        </header>
                    <div className='news-img'></div>
                        <div className='news-detailed'>
                            <p>SINGAPORE: The former CEO and directors of a company linked to an alleged billion-dollar nickel investment fraud case were charged on Thursday (Mar 7), said the Monetary Authority of Singapore (MAS). 
                                Shim Wai Han, Doo Chun Ki and Tan Kay Siong held several top positions in Envysion Wealth Management, currently known as Hui Xun Asset Management.
                            </p>
                            <p>Envysion was a holder of a capital markets services licence for fund management. The company was the manager of Envysion Global Investments VCC, which established the Envysion Commodity Strategy Fund. 
                                The fund was used to invest in Envy Global Trading, whose former managing director Ng Yu Zhi is at the centre of an alleged billion-dollar nickel investment fraud case.
                            </p> 
                            <p>Shim is the former CEO of Envysion Wealth, while Doo is the former chief investment officer and Tan is the former chief operating officer and chief compliance officer.
                            </p>
                            <p>MAS’ investigations found that Shim, Doo and Tan had allegedly failed to put in place an appropria
                                te risk management framework for the assets that were managed by the fund. They each face one charge.
                                They were also each charged with failing to mitigate conflicts of interest related to loans received by Shim and the referral fees received by Envysion for investing in Envy Global Trading through the fund. 
                            </p>
                            <p>
                                Shim also faces one charge of making false statements when providing a financial advisory service, and two charges of forwarding to Ng emails between MAS and Envysion.
                            </p>
                        </div> 
                </div>
                <div className='right-container' id='right-container'>
                        <h2>Related News</h2>
                        <div className='news-container'> 
                            <div className='news-img'></div>
                            <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                        </div>
                        <div className='news-container'> 
                            <div className='news-img'></div>
                            <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                        </div>
                        <div className='news-container'> 
                            <div className='news-img'></div>
                            <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                        </div>
                        <div className='news-container'> 
                            <div className='news-img'></div>
                            <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default NewsDetailed;