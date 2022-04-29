import React, { useState } from 'react';
import './App.css';

function App() {
  const[count,setcount]=useState(0);
  const decrementHandler=()=>{
    if(count>0){
      setcount(count-1);
    }
    
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Simple Counter App</h1>
      </div>
      <div className='counter-container'>
        <div>
          <h1>Counter value</h1>
          <h1>{count}</h1>
        </div>
        <div className='button-container'>
          <button onClick={()=>setcount(count+1)}>Increment</button>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={()=>setcount(0)}>Reset</button>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
