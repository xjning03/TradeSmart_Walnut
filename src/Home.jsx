import React from 'react';
import './Home.css';

function SearchBar() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search..." style={{ width: '250px' }}/>
      </div>
    );
  }

function Home() {
    return (
        <div className='Home' id='Home'>
            <div className="search-bar-container">
                <SearchBar />
            </div>
        </div>
    );
}

export default Home;
