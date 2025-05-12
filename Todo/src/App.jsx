import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addtodo(){
    if(todo === "") return;

    setTodos([...todos, todo]);
    setTodo("")


  }

  function deletetodo(index){
   const updatedarray =  todos.filter((_, i) =>{

    return  i !== index;

    })

    setTodos([...updatedarray]);

  }

  return (
    <>

    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button onClick={addtodo}>ADD</button>
    

    <ul>
      {todos.map((value, index) => 

      <li key={index}>{value}
      <button onClick={() => deletetodo(index)}>Delete</button>
      
      </li>
      
      )}
      
     
    </ul>
      
    </>
  )
}

export default App
