import React from 'react';
import './App.css';

//React Hooks are functions and serve as a modular replacement for state and lifecycle methods. 
//Instead of class components, React Hooks allow you to build functional-based components.

function Todo({ todo, index, completeTodo }) { //component that is used to return to the main App component
  return ( //Todo is called and passed into todo and show text part of the todo (todo.text)
    //When complete button is clicked, it will add the textDecoration styling and cross out the item
    <div 
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    > 
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
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

  const removeTodo = index => { //Function to delete an item
    const newTodos = [...todos]; //spread operator will grab current list and splicing chosen index off array item
    newTodos.splice(index, 1); //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    setTodos(newTodos); //return the new state by setting it with setTodos to be newTodos  
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => ( //by using map(), new array of items is created by mapping over the todo items from state
        //and displaying them by index
          <Todo //^this adds a <div> for app, a <div> for todo-list, and a map of the todos to Todo components
            key={index} //^this Todo part returns to the App component
            index={index}
            todo={todo}
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
          />  
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
