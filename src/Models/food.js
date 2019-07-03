import React, { Component } from "react";

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.food.name,
      serving_count: props.food.serving_count,
      total_calories: props.food.total_calories
    };
  }

  render() {
    return (
      <div style={{ display: 'flex'}}>
        <span style={{ flex: 1 }}>{this.state.name}</span>
        <span style={{ flex: 1 }}>{this.state.serving_count}</span>
        <span style={{ flex: 1 }}>{this.state.total_calories}</span>
        <span style={{ flex: 1 }}><button>Edit Food</button></span>
        <span style={{ flex: 1 }}><button>Remove Food</button></span>
      </div>
    );
  }
}

