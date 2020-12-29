import React from 'react';
import './App.css';

function Todo({ todo }) { //component that is used to return to the main App component
  return ( //Todo is called and passed into todo and show text part of the todo (todo.text)
    <div className="todo">
      {todo.text}
    </div>
  );
};
//component to create new item for todo app
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState(""); //setting state; first state empty and the second is how to set the state

  const handleSubmit = e => { //variable to handle addTodo function and add item to list
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}> 
      <input //functionality for user to not add empty item to list
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>  
  );  
}

function App() {
  const [todos, setTodos] = React.useState([ //first parameter, todos is name of state; setTodos is used to set the state
    { 
      text: "Learn about React",
      isCompleted: false 
    }, //hook of useState is what React uses to hook into the state or lifecycle of the component
    { 
      text: "Meet Gracie for lunch",
      isCompleted: false 
    }, //then creates an array of objects to have beginning of state
    { 
      text: "Build epic todo app",
      isCompleted: false
    }
  ]);

  //Function will grab the existing list of items, add on the new item, and display that new list
  const addTodo = text => {
    const newTodos = [...todos, { text }]; //three dots before the todos copy the list for you so that you are able to add on the new to-do item
    setTodos(newTodos);
  };

  const completeTodo = index => { //Function to mark items complete
    const newTodos = [...todos]; //also known as spread operator to grab the list
    newTodos[index].isCompleted = true; //once item is completed
    setTodos(newTodos); //newTodos is updated 
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => ( //by using map(), new array of items is created by mapping over the todo items from state
        //and displaying them by index
          <Todo //^this adds a <div> for app, a <div> for todo-list, and a map of the todos to Todo components
            key={index}
            index={index}
            todo={todo}
          />  
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
