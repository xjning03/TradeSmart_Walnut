import React from 'react';
import './NewsSection.css';
import News from './News';
import { Link } from 'react-router-dom';

function NewsSection() {
  return (
    <div className='NewsSection' id="NewsSection">
        <News />
            <div className='container' id="container">
                <h1>Today News</h1>
                <div className='top-container'>
                <div className="left-container">
                <Link to="/NewsDetailed" className='Link'>
                  <div className='news-container'>
                          <div className='news-img'></div>
                          <span>
                              <h3 className='news-loc'>SINGAPORE-LINE</h3>
                              <p className="news-desc">SINGAPORE: The former CEO and directors of a company linked to ...</p>
                              <p className='news-time'>Oct 10, 2024 1:00 PM</p>
                          </span>
                    </div>
                </Link>
                  </div>
                    <div className='right-container'>
                    <Link to="/NewsDetailed" className='Link'>
                        <div className='news-container'>
                            <div className='news-img'></div>
                            <span>
                                <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                                <p className="news-desc">SINGAPORE: The former CEO and directors of a company linked to ...</p>
                                <p className='news-time'>Oct 10, 2024 1:00 PM</p>
                            </span>
                        </div>
                    </Link>
                    <Link to="/NewsDetailed" className='Link'>
                        <div className='news-container'>
                            <div className='news-img'></div>
                            <span>
                                <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                                <p className="news-desc">SINGAPORE: The former CEO and directors of a company linked to ...</p>
                                <p className='news-time'>Oct 10, 2024 1:00 PM</p>
                            </span>
                        </div>
                    </Link>
                    <Link to="/NewsDetailed" className='Link'>
                        <div className='news-container'>
                            <div className='news-img'></div>
                            <span>
                                <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                                <p className="news-desc">SINGAPORE: The former CEO and directors of a company linked to ...</p>
                                <p className='news-time'>Oct 10, 2024 1:00 PM</p>
                            </span>
                        </div>
                    </Link>
                        <button className="btn">
                          Click for more
                      </button>
                    </div>
                </div>
                <div className='bottom-container'>
                    <div className='left-container'>
                        <h2>YESTERDAY <span className='bold'>NEWS</span></h2>
                        <div className='news-container'>
                            <div className='news-img'></div>
                            <span>
                                <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                            </span>
                        </div>
                        <div className='news-container'>
                            <div className='news-img'></div>
                            <span>
                                <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                            </span>
                        </div>
                        <div className='news-container'>
                            <div className='news-img'></div>
                            <span>
                                <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                            </span>
                        </div>
                        <div className='news-container'>
                            <div className='news-img'></div>
                            <span>
                                <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                            </span>
                        </div>
                        <button className="btn">
                          Click for more
                        </button>
                    </div>
                        <div className='right-container'>
                            <h2>WEEKLY <span className='bold'>NEWS</span></h2>
                            <div className='news-container'>
                                    <div className='news-img'></div>
                                    <span>
                                        <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                                    </span>
                            </div>
                            <div className='news-container'>
                                    <div className='news-img'></div>
                                    <span>
                                        <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                                    </span>
                            </div>
                            <div className='news-container'>
                                    <div className='news-img'></div>
                                    <span>
                                        <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                                    </span>
                            </div>
                            <div className='news-container'>
                                    <div className='news-img'></div>
                                    <span>
                                        <h3 className='news-title'>Former CEO of company linked to S$1.5b nickel investment fraud case charged</h3>
                                    </span>
                            </div>
                            <button className="btn">
                                Click for more
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default NewsSection;