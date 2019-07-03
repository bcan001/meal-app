import React, { Component } from "react";

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { food } = this.props;
    return (
      <div style={{ display: 'flex'}}>
        <span style={{ flex: 1 }}>{food.name}</span>
        <span style={{ flex: 1 }}>{food.serving_count}</span>
        <span style={{ flex: 1 }}>{food.total_calories}</span>
        <span style={{ flex: 1 }}><button>Edit Food</button></span>
        <span style={{ flex: 1 }}><button>Remove Food</button></span>
      </div>
    );
  }
}

