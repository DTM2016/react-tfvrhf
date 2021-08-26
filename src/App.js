import React, { useState } from 'react';
import AboutMe from './AboutMe';
// import './style.css'; iooo

export default function App() {
  const [stateBorn, setStateBorn] = useState('wash dc');
  const [age, setAge] = useState(53);

  return (
    <div xstyle={{ color: 'red' }}>
      <h1>DERIK LEWIS!</h1>
      <hr />
      <span className="key">was born: </span> {stateBorn} <br />
      <span className="key">age:</span> {age}
      <AboutMe stars={5} newAg={'io'} />
    </div>
  );
}
