import React, { Component } from "react";

class Counter extends Component { 
  render() {
    let classs = this.getBadgeClasses();
    //console.log("props", this.props);
    return (
      <div>
        <h4 className="">#{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classs = "badge m-2 badge-";
    classs += this.props.counter.count === 0 ? "warning" : "primary";
    return classs;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
