import React, { useState } from 'react'
import "./App.css";
import BirthdayReminder from './BirthdayReminder';
import data from './data';
const App = () => {
  const [people, setpeople] = useState(data);
  return (
    <div className="appCon">
      <div className='appwrapper'>
        <h3 className='toptitle' style={{fontFamily:"revert"}}>{people.length} Birthday Today</h3>
        <BirthdayReminder people={people} />
        <button onClick={()=>{setpeople([])}} className="allclear">clear All</button>
      </div>
    </div>
  )
}

export default App