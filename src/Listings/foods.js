import React, { Component } from "react";
import FoodHeader from '../Headers/foodHeader';
import Food from '../Models/food';


export default class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: props.foodList,
      mealId: props.mealId
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      foodList: newProps.foodList
    });
  }

  addFood = async () => {
    console.log('add new food form')
    let { foodList } = this.state;
    
    let newFood = {
      id: foodList.length + 1,
      name: '',
      serving_count: 0,
      total_calories: 0,
      newlyAddedFood: true,
      isUpdating: true
    }

    this.setState({
      foodList: [...foodList,newFood]
    })
  }

  saveFood = async (e,food) => {
  }

  saveExistingFood = async (e,food) => {
    console.log('existing food saved')
    e.preventDefault();

    let { foodList,mealId } = this.state;
    let { id,name,serving_count,total_calories } = food;

    console.log('meal id:')
    console.log(mealId)
    console.log('food id:')
    console.log(food.id)

    
    



  }

  removeFood = async foodId => {
    const { foodList } = this.state;

    this.setState({
      foodList: foodList.filter(x => x.id !== foodId),
    });
  };

  removeExistingFood = async foodId => {
    console.log('existing food removed')





  };


  render() {
    const { foodList } = this.state;
    return (
      <div style={{ marginLeft: '50px' }}>
        <FoodHeader />
        {foodList.map(food => (
          <div key={food.id}>
            <Food food={food} removeFood={this.removeFood} saveExistingFood={this.saveExistingFood} removeExistingFood={this.removeExistingFood} />
          </div>
        ))}
        <button onClick={() => this.addFood()}>add food</button>
      </div>
    );
  }
}



