import React, { PureComponent } from "react";
import Meals from './Meals';
// import MealForm from './Forms/mealForm';

export default class App extends PureComponent {
	state = {
    title: "Meal Tracking App"
  };

  render() {
  	const { title } = this.state;
  	// <Meals />
    return (
    	<div>
    		<h1>{title}</h1>
        <Meals />
      </div>
    );
  }
}

// next steps:
// 1. move to json.db store
	// - need to write queries to fetch the right data from json.db for MealsToday, MealsThisWeek, and MealsThisMonth
// 2. make it so data can be updated from components to json.db
// 3. move to redux (use thunk, saga, or custom middleware)


