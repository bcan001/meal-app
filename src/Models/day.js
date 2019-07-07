import React, { Component } from "react";
import MealHeader from '../Headers/mealHeader';
import Meals from '../Listings/meals';
import * as calculator from '../Helpers/calculator.js'; 

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealsIsOpen: false
    };
  }

  // totalDayCalories: 0,
  // averageDayHealthRating: 0.00,
  // componentWillReceiveProps(nextProps) {
  //   let {meals} = nextProps.meals
  //   this.setState({
  //     totalDayCalories: calculator.calculateTotalDayCalories(nextProps.meals),
  //     averageDayHealthRating: calculator.calculateAverageDayHealthRating(nextProps.meals),
  //   })
  // }

  showMeals = () => {
    this.setState({
      mealsIsOpen: !this.state.mealsIsOpen ? true : false
    })
  }

  render() {
    const { meals,dayOfTheWeek } = this.props;
    console.log('day state')
    console.log(this.state)
    return (
      <div>
      	<div className='row'>
          <span className='col-sm'>{dayOfTheWeek}</span>
          <span className='col-sm'>&nbsp;</span>
          <span className='col-sm'>total day calories</span>
          <span className='col-sm'>{calculator.calculateAverageDayHealthRating(meals)}</span>
          <span className='col-sm'><button className="btn btn-success" onClick={() => this.showMeals()}>show meals</button></span>
        </div>
        {
          this.state.mealsIsOpen ? 
          <div>
            <Meals meals={meals} />
          </div>
          : 
          <div hidden={true}>
            <Meals meals={meals} />
          </div>
        }
      </div>
    )
  }
}






