import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // ,
    // imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  render() {
    let classs = this.getBadgeClasses();

    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" className="src" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
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
