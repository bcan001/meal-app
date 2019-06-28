import React, { Component } from "react";
import MealHeader from '../Headers/mealHeader';
import Meal from '../Models/meal';
import NewMeal from '../Forms/newMeal';


export default class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: props.meals
    };
  }

  componentDidMount() {
    console.log('compnent is mountedddddd')
    console.log(this.props)
  }

  addMeal = () => {
    console.log('add new meal form')
    let { meals } = this.state;
    // Title,Day,Date,Time,Total Calories,Health Rating,Foods
    let newMeal = {
      id: meals.length + 1,
      title: '',
      day: '',
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

  removeMeal = mealId => {
    // e.preventDefault();
    console.log('meal has been removed')
    console.log(mealId)
    
    const { meals } = this.state;
    this.setState({
      meals: meals.filter(x => x.id !== mealId),
    });
  };


  // PLEASE COMBINE LIST AND FORMS TOGETHER FOR EACH MEAL
  // https://github.com/bcan001/todo-app-react/blob/master/src/Todo/todoListItem.js


  render() {
    const { meals } = this.state;
    console.log('meals within meals.js')
    console.log(meals)
    return (
    	<div>
    		<MealHeader />
	      {meals.map(meal => (
	  				<div key={meal.id} >
              <Meal meal={meal} update={meal.update ? true : false} removeMeal={this.removeMeal} />
	  				</div>
	  			)
	  		)}
        <button onClick={() => this.addMeal()}>add meal</button>
	  	</div>
    );
  }
}


















