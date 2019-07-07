import React, { PureComponent } from "react";
import Meals from './Meals';
// import MealForm from './Forms/mealForm';

export default class App extends PureComponent {
	state = {
    title: "Meal Tracking App"
  };

  render() {
  	const { title } = this.state;
    return (
    	<div className="container">
    		<h1>{title}</h1>
        <Meals />
      </div>
    );
  }
}

// great js examples of API calls
// https://github.com/coder4affine/benjamin_zeolearn/blob/786bb6f45e5454f705125e027e2428c24c1c88df/my-app/src/Todo/index.js

// next steps:
// 1. integrate bootstrap: container => row => col-sm.  X
// 2. total calories of meals needs to update with changes in food calories
// 3. build archive screen with the following. needs to switch to archive, just like everything else:
  // change meals this month to 'meals past 30 days'. change meals this week to 'meals past 7 days'
// 4. api for date management: HOW WILL I MANAGE EVERY SINGLE DAY STATE ?









