import React, { Component } from 'react';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Let's get started!</h2>
          <ExpenseItem></ExpenseItem>
          <ExpenseItem></ExpenseItem>
      </div>
    );
  }
}

export default App;
