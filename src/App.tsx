import React from 'react';
import './App.css';
import DemoStyleComponent from './components/demo-component/demo-style-component';
import TodoStyleComponent from './components/todo-component/todo-style-component';

function App() {
  return (
    <div className="App">
      <h2>Styling Components in React</h2>
      <p>In this lab we'll be quickly taking a look at how you inline style React components. There are some differences in syntax that are worth taking a look at.</p>


      <div className="section-container">
        <DemoStyleComponent></DemoStyleComponent>

      </div>
      <div className="todo-container">
        <TodoStyleComponent></TodoStyleComponent>
      </div>

      <div>
        <a href="https://legacy.reactjs.org/docs/dom-elements.html#style">https://legacy.reactjs.org/docs/dom-elements.html#style</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try adding styles to the index.css or App.css file.*/}
    </div>
  );
}

export default App;
