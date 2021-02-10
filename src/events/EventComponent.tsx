import React from 'react';

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event);
}

const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  console.log(event);
};

const EventComponent: React.FC = () => {
  return (
    <div>
      <input type="text" onChange={onChange}/>
      <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
  );
};

export default EventComponent;