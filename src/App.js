import React from 'react';
import './App.css';

function Todo({ todo }) { //component that is used to return to the main App component
  return ( //Todo is called and passed into todo and show text part of the todo (todo.text)
    <div className="todo">
      {todo.text}
    </div>
  );
};

function App() {
  const [todos, setTodos] = React.useState([ //first parameter, todos is name of state; setTodos is used to set the state
    { text: "Learn about React" }, //hook of useState is what React uses to hook into the state or lifecycle of the component
    { text: "Meet Gracie for lunch" }, //then creates an array of objects to have beginning of state
    { text: "Build epic todo app"}
  ]);

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
      </div>
    </div>
  );
}

export default App;
