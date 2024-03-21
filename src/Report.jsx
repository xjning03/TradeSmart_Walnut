import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './Report.css';
import myComplaintIcon from './assets/images/myComplaintIcon.png';
import submitComplaintIcon from './assets/images/submitComplaintIcon.png';
import reportContentImage from './assets/images/report-contentImage.png';
import SubmitReport from './SubmitReport'; // Import SubmitReport component

function Report() {
    return (
        <Router>
            <div>
                <div className='Report' id='Report'>
                    <div className='toolbar' id='toolbar'>
                        <div className="toolbar-row">
                            <Link to="/report">
                                <img src={myComplaintIcon} className='report-icon' alt='My Complaint Icon' />
                                <span className='toolbar-name' id='toolbal-name'>My Complaint</span>
                            </Link>
                        </div>
                        <div className="toolbar-row">
                            <Link to="/submit-report">
                                <img src={submitComplaintIcon} className='report-icon' alt='New Complaint Icon' />
                                <span className='toolbar-name' id='toolbal-name'>Submit Complaint</span>
                            </Link>
                        </div>
                    </div>

                    <Switch>
                        <Route path="/report">
                            <div className="fraud-contentl" id='fraud-content'>
                                <h1>Reporting Fraudulent Trading - Your Role in Ensuring Market Integrity</h1>
                                <div className='fraudContent-imgAndP'>
                                    <img src={reportContentImage} className='fraudContent-image' alt="Help Fight Fraudulent" />
                                    <p>The reporting system serves as a vital tool in our ongoing efforts to maintain the integrity and fairness of financial markets. By allowing users to submit reports of suspected fraudulent trading activities, we aim to detect and prevent nefarious behavior that undermines investor confidence and distorts market dynamics. These reports play a crucial role in identifying instances of insider trading, market manipulation, and other fraudulent practices, enabling prompt investigation and appropriate action. Through collective vigilance and active participation, we can safeguard the integrity of the financial system, protect investors from potential harm, and uphold the principles of transparency and accountability in our markets.</p>
                                </div>

                                <div className="table-container">
                                    <table className="complaint-table">
                                        <thead>
                                            <tr>
                                                <th colSpan="7">My Complaint</th>
                                            </tr>
                                            <tr>
                                                <th>No</th>
                                                <th>Date</th>
                                                <th>Stock/Crypto</th>
                                                <th>Name</th>
                                                <th>Fraudulent Activity</th>
                                                <th>Status</th>
                                                <th>Comment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                    <th>1</th>
                                                    <th>22/2/2024</th>
                                                    <th>Stock</th>
                                                    <th>Apple Inc</th>
                                                    <th>Market Manipulation</th>
                                                    <th>Resolved</th>
                                                    <th>view</th>
                                            </tr>
                                            <tr>
                                                    <th>2</th>
                                                    <th>9/3/2024</th>
                                                    <th>Crypto</th>
                                                    <th>Ethereum USD</th>
                                                    <th>Spoofing</th>
                                                    <th>Under Review</th>
                                                    <th>-</th>
                                            </tr>
                                            <tr>
                                                    <th>3</th>
                                                    <th>9/3/2024</th>
                                                    <th>Stock</th>
                                                    <th>Meta Platforms, Inc.</th>
                                                    <th>Insider Trading</th>
                                                    <th>Investigation Ongoing</th>
                                                    <th>view</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Route>
                        <Route path="/submit-report">
                            <SubmitReport />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default Report;
