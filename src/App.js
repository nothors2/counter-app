import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleReset = () =>{
    const counters = this.state.counters.filter(c =>{
      c.value = 0;
      return c;

    });
    this.setState({counters}) ;
  }
  handleIncrement = (counter) =>{ 
    console.log('handleIncrement',counter);

    const counters =  [...this.state.counters];
    const idx = counters.indexOf(counter);
    counters[idx] = {...counter};
    counters[idx].value++;
    
    this.setState({counters}); 
    console.log(this.state.counters[idx]) ;
  }
  handleDelete = (id) => {
    console.log('handleDelete',id);
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({counters});
  }
  render() { 
    return ( 
      <div>
        <Navbar totalCounter={this.state.counters.filter(c=>c.value>0).length} />
        <main className="countainer">
          <Counters 
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </div> );
  }
}
 
export default App; 
