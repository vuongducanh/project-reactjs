import React, { useState, useEffect } from 'react';
import './about.scss';

function About() {
  const initialCount = 10

  const [count , setCount] = useState(initialCount);
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    console.log('run');

    return () => {
      console.log('component hide');
    }
  }, []);

  useEffect(() => {
    console.log('update');
  }, [count]);

  return (
    <div className="about">
       Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>

      {listUser.map((el, index) => <li key={index}> {el.id} {el.name} </li>)}

      <button onClick={() => setListUser([...listUser, {name: 'kaka', id: listUser.length}])}>Add user</button>
    </div>
  )
}

export default About;
