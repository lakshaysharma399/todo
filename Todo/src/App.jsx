import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addtodo(){
    if(todo === "") return;

    setTodos([...todos, todo]);
    setTodo("")


  }

  return (
    <>

    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button onClick={addtodo}>ADD</button>

    <ul>
      {todos.map((value) => 

      <li>{value}</li>
      
      )}
      
     
    </ul>
      
    </>
  )
}

export default App
