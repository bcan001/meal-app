import React, { Component } from "react";
import FoodHeader from '../Headers/foodHeader';
import Food from '../Models/food';

import { FaPlus } from "react-icons/fa"; // add meal



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
      <div className='card bg-warning'>
        <FoodHeader />
        {foodList.map(food => (
          <div key={food.id}>
            <Food food={food} saveFood={saveFood} saveExistingFood={saveExistingFood} removeFood={removeFood} removeExistingFood={removeExistingFood} />
          </div>
        ))}
        <div className='row'>
          <div className='col-sm'>
            <button className="btn btn-secondary" onClick={() => addFood()}><FaPlus /></button>
          </div>
        </div>
      </div>
    );
  }
}



