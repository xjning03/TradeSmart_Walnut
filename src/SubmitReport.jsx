import React from 'react';
import './SubmitReport.css';


function SubmitReport() {
  return (
    <div>
      
      <div className='submit-content' id='submit-content'>
            <div className="container" id="personal-details-container">
                <h2>A. Personal Details</h2>
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone No. *</label>
                    <input type="text" id="phone" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address *</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" />
                  </div>
              </div>
              

              <div className="container" id="fraudulent-trading-details-container">
          <h2>B. Fraudulent Trading Details</h2>
          <div className="form-group">
            <label htmlFor="type">Type * (stock/crypto)</label>
                      <select id="type" name="type">
                      <option value="" disabled selected>Choose one option</option>
              <option value="stock">Stock</option>
              <option value="crypto">Crypto</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Company Name *(stock/crypto)</label>
                      <select id="name" name="name">
                      <option value="" disabled selected>Choose one option</option>
                <option value="Apple Inc">Apple Inc</option>
                <option value="Microsoft Corporation">Microsoft Corporation</option>
                <option value="Amazon.com Inc">Amazon.com Inc</option>
                <option value="Alphabet Inc">Alphabet Inc</option>
                <option value="Facebook, Inc.">Facebook, Inc.</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="activity">Fraudulent Activity *</label>
                      <select id="activity" name="activity">
                      <option value="" disabled selected>Choose one option</option>
                          <option value="Insider Trading">Insider Trading</option>
                          <option value="Pump and Dump Schemes">Pump and Dump Schemes</option>
                          <option value="Front Running">Front Running</option>
                          <option value="Market Manipulation">Market Manipulation</option>
                          <option value="Spoofing">Spoofing</option>
                          <option value="Layering">Layering</option>
                          <option value="Account Takeover">Account Takeover</option>
            </select>
          </div>
          <div className="form-group">
                      <label htmlFor="description">Description of Incident *</label>
                      <p className="explanation">
              - Date and time of the incident <br />
              - Specific securities or transactions involved <br />
              - Any unusual or suspicious behaviors observed <br />
              - Any supporting evidence or documentation (e.g., screenshots, transaction records)
            </p>
            <textarea id="description" name="description" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="file">File Upload</label>
            <input type="file" id="file" name="file" />
          </div>
              </div>

              <div className="container" id="legal-disclaimer">
            <h2>C. Legal Disclaimer</h2>
            <div className="checkbox-group">
              <input type="checkbox" id="disclaimer1" name="disclaimer1" />
              <label htmlFor="disclaimer1">I acknowledge that the information provided is accurate to the best of my knowledge.</label>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="disclaimer2" name="disclaimer2" />
              <label htmlFor="disclaimer2">I understand and accept that if any disclosures made are found to be false or in  breach of any provisions under the Whistleblower Protection Act 2010, the  protection under the Act maybe revoked or affected</label>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="disclaimer3" name="disclaimer3" />
              <label htmlFor="disclaimer3">I understand and accept that if any disclosures made are found to be false  or in breach of any other provisions under the Whistleblower Protection Act  2010, I may be charged and may lose the protection, provided under the  Whistleblower Protection Act 2010</label>
            </div>
              </div>
              
              <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
              

        </div>
    </div>
  );
}

export default SubmitReport;
