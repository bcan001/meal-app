import React, { Component } from "react";
import MealHeader from '../Headers/mealHeader';
import Meal from '../Models/meal';
import NewMeal from '../Forms/newMeal';


export default class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      meals: newProps.meals
    });
  }

  addMeal = async () => {
    console.log('add new meal form')
    let { meals } = this.state;
    // Title,Day,Date,Time,Total Calories,Health Rating,Foods
    let newMeal = {
      id: meals.length + 1,
      title: '',
      day_of_the_week: '',
      date: '',
      time: '',
      total_calories: 0,
      health_rating: 0,
      foods: [],
      update: true
    }

    this.setState({
      meals: [...meals,newMeal]
    })
  }

  saveMeal = async (e,meal) => {
    e.preventDefault();
    // console.log('meal has been saved')
    // console.log(e.target)
    // console.log(meal)

    let { meals } = this.state;

    let newMeal = {
      id: meal.id,
      title: meal.title,
      day_of_the_week: meal.day_of_the_week,
      date: meal.date,
      time: meal.time,
      total_calories: meal.total_calories,
      health_rating: meal.health_rating,
      foods: meal.foods
    }

    const res = await fetch('http://localhost:3004/meals', {
      method: 'POST',
      body: JSON.stringify(newMeal),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const createdMeal = await res.json();

    // meals.map(updatedMeal => (
    //   (updatedMeal.id === meal.id ? (updatedMeal.update = false) : null)
    // ));
    // console.log()
    // .filter(x => x.id !== meal.id)
    // console.log('meals before')
    // console.log(this.state.meals)
    this.setState({
      meals: [...meals.filter(x => x.id !== meal.id),createdMeal]
    })
    // console.log('meals after')
    // console.log(this.state.meals)
    

  };

  // this is for saved existing meals(edit save)
  saveExistingMeal = async (e,meal) => {

  }

  removeMeal = mealId => {
    // e.preventDefault();
    // console.log('meal has been removed')
    // console.log(mealId)
    
    const { meals } = this.state;
    this.setState({
      meals: meals.filter(x => x.id !== mealId),
    });
  };

  render() {
    const { meals } = this.state;
    return (
    	<div>
    		<MealHeader />
	      {meals.map(meal => (
	  				<div key={meal.id} >
              <Meal meal={meal} update={meal.update ? true : false} saveMeal={this.saveMeal} removeMeal={this.removeMeal} />
	  				</div>
	  			)
	  		)}
        <button onClick={() => this.addMeal()}>add meal</button>
	  	</div>
    );
  }
}


















