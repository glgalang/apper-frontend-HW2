import './App.css';
import {useState} from 'react';

const Cheeklist = () => {
  const [checklist, setChecklist] = useState([])
  const [item, setItem] = useState('')

  const addList = () => {
    const newList = checklist.concat(
      {
        index : checklist.length + 1, 
        name : item
      }
    )
    setChecklist(newList)
    setItem('')
  }

  const clearList = () => {
    const clearedList = []
    setChecklist(clearedList)
  }

  const handleRemove = (index) => {
    const updatedList = checklist.filter(
      (item) => item.index !== index
    )
    setChecklist(updatedList)
  }

  return (
    <div className="App">
      <header className="head">
        <h2>My Cheeklist</h2>
        <div>
          <input 
              type = 'text' 
              value = {item}
              onChange = {(e) => setItem(e.target.value)} />
          <button type = 'button' onClick = {addList} >Add List</button>
          <button onClick = {clearList} >Clear List</button>
          <ul>
            {checklist.map((item) => (
            <li key = {item.index} onClick = {() => handleRemove(item.index)}> {item.name} </li>
            ))
          }</ul>
        </div>
        
      </header>
    </div>
  );
}

export default Cheeklist
