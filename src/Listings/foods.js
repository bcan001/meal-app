import React, { Component } from "react";
import FoodHeader from '../Headers/foodHeader';
import Food from '../Models/food';


export default class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: props.foodList
    };
  }

  componentWillReceiveProps(newProps) {
    console.log('these are new props for foods.js')
    console.log(newProps.foodList)
    this.setState({
      foodList: newProps.foodList
    });
  }


  render() {
    const { foodList } = this.state;
    const { addFood,saveFood,saveExistingFood,removeFood,removeExistingFood } = this.props;
    return (
      <div style={{ marginLeft: '50px' }}>
        <FoodHeader />
        {foodList.map(food => (
          <div key={food.id}>
            <Food food={food} saveFood={saveFood} saveExistingFood={saveExistingFood} removeFood={removeFood} removeExistingFood={removeExistingFood} />
          </div>
        ))}
        <button onClick={() => addFood()}>add food</button>
      </div>
    );
  }
}



