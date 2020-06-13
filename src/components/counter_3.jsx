import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };
  handleIncrement = () => {
    console.log(111);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    let classs = this.getBadgeClasses();
    console.log("props", this.props);
    return (
      <div>
        <h4 className="">#{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classs = "badge m-2 badge-";
    classs += this.state.count === 0 ? "warning" : "primary";
    return classs;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
