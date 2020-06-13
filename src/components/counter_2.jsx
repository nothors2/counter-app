import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // ,
    // imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  renderTag() {
    if (this.state.tags.length === 0) return <p>'There are no '</p>;

    return (  <ul>{this.state.tags.map(tag =>    <li key={tag}>{tag}</li>    )}</ul>);
  }
  render() { 

    return <div>{this.renderTag()}</div>;
  }
}

export default Counter;
