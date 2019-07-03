import React, { Component } from "react";
import FoodHeader from '../Headers/foodHeader';
import Food from '../Models/food';


export default class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { foodList } = this.props;
    return (
      <div style={{ marginLeft: '50px' }}>
        <FoodHeader />
        {foodList.map(food => (
          <div key={food.id}>
            <Food food={food} />
          </div>
        ))}
        <button>add food</button>
      </div>
    );
  }
}



