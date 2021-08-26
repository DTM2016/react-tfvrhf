import React from 'react';
// import './AboutMe.css';

export default function AboutMe(props) {
  const { newAg, stars } = props;

  return (
    <div>
      <h1 xstyle={{ color: 'green' }}>African Girls</h1>
      <hr />
      <h2>computer man</h2>
      <span className="key">xstars: </span> {stars} <br />
      <span className="key">new AG: </span> {newAg}
    </div>
  );
}
