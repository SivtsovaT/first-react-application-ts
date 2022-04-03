import React, { Component } from 'react';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import './components/ExpenseItem.css';

class App extends Component {
  render() {
    return (
      <div className = 'fff'>
        <h2>Let's get started!</h2>
          <ExpenseItem></ExpenseItem>
      </div>
    );
  }
}

export default App;
