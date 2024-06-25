import React from 'react';
import "../style/Body.css";

const Body = () => {
  return (
    <>
      <div className='bodyContainer'>
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
