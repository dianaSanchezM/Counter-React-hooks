import React, { useState } from 'react';
import '../App.css';
import Counter from './Counter';

function App() {
  const [ hidden, setHidden ] = useState(false);

  return (
    <div className="App">
      <div className='hide'>
        <button className='compact-button' onClick={()=> setHidden(!hidden)}>
        {(hidden)? 'Show counter': 'Hide counter'}
        </button>
      </div>
      {!hidden && <Counter />}
    </div>
  );
}

export default App;
