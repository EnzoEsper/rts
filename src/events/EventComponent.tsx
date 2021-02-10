import React from 'react';

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event);
}

const EventComponent: React.FC = () => {
  return (
    <div>
      <input type="text" onChange={onChange}/>
    </div>
  );
};

export default EventComponent;