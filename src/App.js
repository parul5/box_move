import { useState } from 'react';
import Canvas from './components/canvas/canvas';
import Buttons from './components/buttons/buttons'
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([]);
  const [id, setId] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const [count, setCount] = useState(0);

  let addBox = () => {
    console.log(`ID is ${id}`)
    setBoxes([...boxes, {
      id: id
    }])
    setId(prev => ++prev);
    setCount(count => ++count);
    setInitialPosition([200 * (count % 6), (200 * Math.floor((count / 6))) % 800]);
  }

  let deleteAction = (id) => {
    console.log('Element to be deleted ', id)
    setBoxes(boxes.filter((box) => {
      return box.id != id;
    }))
  }

  return (
    <div className="container no-select">
      <Canvas boxes={boxes} deleteAction={deleteAction} isDisabled={isDisabled} initialPosition={initialPosition} />
      <div className="buttons-container">
        <Buttons buttonAction={addBox} setIsDisabled={setIsDisabled} />
      </div>
    </div>
  );
}

export default App;
