import React, { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'John', age: 35 },
  { name: 'Michael', age: 27 },
];

const UserSearch: React.FC = () => {

  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number} | undefined>()

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;