import React from 'react';

const name ="Nazar Bodak";

function MyInfo() {
  return (
    <div>
      <h1 style={{backgroundColor: 'grey'}} className='red'>I am {name}</h1>
      <p>I am Junior in Web programing</p>
      <ul>
        <li>Belgium</li>
        <li>Canada</li>
        <li>Australia</li>
      </ul>
    </div>
  )
}

export default MyInfo;
