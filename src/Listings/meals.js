import React, { Component } from "react";
import MealHeader from '../Headers/mealHeader';
import Meal from '../Models/meal';

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
    let { meals } = this.state;
    // Title,Day,Date,Time,Total Calories,Health Rating,Foods
    let newMeal = {
      id: meals.length + 1,
      title: '',
      day_of_the_week: '',
      date: '',
      time: '',
      health_rating: 0,
      foods: [],
      newlyAddedMeal: true,
      isUpdating: true,
      foodsAreOpen: true
    }

    this.setState({
      meals: [...meals,newMeal]
    })
  }

  saveMeal = async (e,meal) => {
    e.preventDefault();
    let { meals } = this.state;

    // NEED TO UPDATE FOODS HERE SEPARATELY USE MEAL_ID
    let newMeal = {
      id: meal.id,
      title: meal.title,
      day_of_the_week: meal.day_of_the_week,
      date: meal.date,
      time: meal.time,
      health_rating: parseInt(meal.health_rating),
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

    this.setState({
      meals: [...meals.filter(x => x.id !== meal.id),createdMeal]
    })
  };

  // this is for saved existing meals(edit save)
  saveExistingMeal = async (e,meal) => {
    e.preventDefault();

    let { meals } = this.state;
    let { id,title,day_of_the_week,date,time,health_rating,foods } = meal;

    // NEED TO UPDATE FOODS HERE SEPARATELY USE MEAL_ID
    let updatedMeal = {
      id: id,
      title: title,
      day_of_the_week: day_of_the_week,
      date: date,
      time: time,
      health_rating: parseInt(health_rating),
      foods: foods
    }

    const res = await fetch(`http://localhost:3004/meals/${meal.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedMeal),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const newMeal = await res.json();

    // find updated meal in meals and update it
    const i = meals.findIndex(x => x.id === meal.id);
    const updatedMeals = [...meals.slice(0, i), {...newMeal, newlyAddedMeal: false, isUpdating: false }, ...meals.slice(i + 1)];
    this.setState({ meals: updatedMeals });
  }

  removeMeal = async mealId => { 
    const { meals } = this.state;
    this.setState({
      meals: meals.filter(x => x.id !== mealId),
    });
  };

  removeExistingMeal = async mealId => { 
    const { meals } = this.state;
    // NEED TO UPDATE FOODS HERE SEPARATELY USE MEAL_ID
    await fetch(`http://localhost:3004/meals/${mealId}`, {
      method: 'DELETE',
    });

    this.setState({
      meals: meals.filter(x => x.id !== mealId),
    });
  };

  render() {
    const { meals } = this.state;
    return (
      <div className='card bg-light'>
        <MealHeader />
        {meals.map(meal => (
            <div key={meal.id} >
              <Meal meal={meal} newlyAddedMeal={meal.newlyAddedMeal ? true : false} isUpdating={meal.isUpdating ? true : false} saveMeal={this.saveMeal} saveExistingMeal={this.saveExistingMeal} removeMeal={this.removeMeal} removeExistingMeal={this.removeExistingMeal} />
            </div>
          )
        )}
        <div className='row'>
          <div className='col-sm'>
            <button className="btn btn-primary" onClick={() => this.addMeal()}>add meal</button>
          </div>
        </div>
      </div>
    );
  }
}










