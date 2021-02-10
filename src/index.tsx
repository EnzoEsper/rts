import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './classes/UserSearch';
import EventComponent from './events/EventComponent';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'John', age: 35 },
  { name: 'Michael', age: 27 },
];

const App = () => {
  return(
    <div>
      <UserSearch users={users}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));