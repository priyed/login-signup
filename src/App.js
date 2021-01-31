import React from 'react'
import './App.css';

const h1 = (
  <h1>SUBSCRIBE</h1>
)

const p = (
  <p>Sign up with your email address to receive news and updates.</p>
)

const form = (
  <form>
    <input type="text" name="firstname" placeholder="firstname" />
    <input type="text" name="lastname" placeholder="lastname" />
    <input type="email" name="email" placeholder="email" />
    <button className="submit">Subscribe</button>
  </form>
)

const main = (
  <div className="main-wrapper">
    {h1}
    {p}
    {form}
  </div>
)



function App() {
  return (
   <div>
     {main}
   </div>
  );
}

export default App;
