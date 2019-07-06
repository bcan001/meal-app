import React, { Component } from "react";
import MealHeader from '../Headers/mealHeader';
import Meal from '../Models/meal';
// import NewMeal from '../Forms/newMeal';


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
      newlyAddedMeal: true,
      isUpdating: true
    }

    this.setState({
      meals: [...meals,newMeal]
    })

  }

  saveMeal = async (e,meal) => {
    e.preventDefault();
    console.log('meal has been saved')

    console.log(e.target)
    console.log(meal)

    let { meals } = this.state;

    let newMeal = {
      id: meal.id,
      title: meal.title,
      day_of_the_week: meal.day_of_the_week,
      date: meal.date,
      time: meal.time,
      total_calories: meal.total_calories,
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
    console.log('meal saved')

    let { meals } = this.state;
    let { id,title,day_of_the_week,date,time,total_calories,health_rating,foods } = meal;

    let updatedMeal = {
      id: id,
      title: title,
      day_of_the_week: day_of_the_week,
      date: date,
      time: time,
      total_calories: total_calories,
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

  // great js examples of API calls
  // https://github.com/coder4affine/benjamin_zeolearn/blob/786bb6f45e5454f705125e027e2428c24c1c88df/my-app/src/Todo/index.js
  removeMeal = async mealId => {
    // e.preventDefault();    
    const { meals } = this.state;
    // await fetch(`http://localhost:3004/meals/${mealId}`, {
    //   method: 'DELETE',
    // });

    this.setState({
      meals: meals.filter(x => x.id !== mealId),
    });
  };

  removeExistingMeal = async mealId => {
    // e.preventDefault();    
    const { meals } = this.state;
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
      <div>
        <MealHeader />
        {meals.map(meal => (
            <div key={meal.id} >
              <Meal meal={meal} newlyAddedMeal={meal.newlyAddedMeal ? true : false} isUpdating={meal.isUpdating ? true : false} saveMeal={this.saveMeal} saveExistingMeal={this.saveExistingMeal} removeMeal={this.removeMeal} removeExistingMeal={this.removeExistingMeal} />
            </div>
          )
        )}
        <button onClick={() => this.addMeal()}>add meal</button>
      </div>
    );
  }
}










