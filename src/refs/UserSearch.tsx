import React, { useEffect, useRef, useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'John', age: 35 },
  { name: 'Michael', age: 27 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number} | undefined>()

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    
    inputRef.current.focus()
  }, [])

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;