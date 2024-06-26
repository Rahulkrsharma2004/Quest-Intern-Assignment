import React from 'react';
import "../style/Body.css";

const Body = () => {
  return (
    <>
      <div className='bodyContainer'>
      <div className='logofix'>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGlkPSJGcmFtZSA0MjczMjE0OTciPg0KPGcgaWQ9IlZlY3RvciI+DQo8cGF0aCBkPSJNMjYgMlYxMEwxOCAxOFYxMEgxMFYxNS4yODE3QzEwIDE2Ljc4MzMgMTEuMjE2NyAxOCAxMi43MTgzIDE4SDE4TDEwIDI2QzUuNTgxNjcgMjYgMiAyMi40MTgzIDIgMThWMkgyNloiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMjYgMThMMTggMThMMTggMjZIMjZWMThaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9nPg0KPC9nPg0KPC9zdmc+DQo=" alt="" />
      </div>
        <h1>Transform Your Product with  Intelligent In-App Experiences</h1>
        <h3>Empower growth & Marketing Teams to Boost Engagement and Conversion<br />10x faster without data or engineering team</h3>
        
        <form className="emailForm">
          <input type="email" placeholder="Enter your mail address" required />
          <button type="submit">Book Demo</button>
        </form>
        <p className="noCreditCard">No credit card required</p>
      </div>
      <div style={{textAlign:"center"}}>
        <img src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg" alt="" />
      </div>
      
    </>
  );
}

export default Body;
