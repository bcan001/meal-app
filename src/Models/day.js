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
      	<div style={{ display: 'flex'}}>
          <span style={{ flex: 1 }}>{dayOfTheWeek}</span>
          <span style={{ flex: 1 }}>&nbsp;</span>
          <span style={{ flex: 1 }}>total day calories</span>
          <span style={{ flex: 1 }}>{calculator.calculateAverageDayHealthRating(meals)}</span>
          <span style={{ flex: 1 }}><button className="btn btn-success" onClick={() => this.showMeals()}>show meals</button></span>
        </div>
        {
          this.state.mealsIsOpen ? 
          <div style={{ marginLeft: '50px' }}>
            <Meals meals={meals} />
          </div>
          : 
          <div style={{ marginLeft: '50px' }} hidden={true}>
            <Meals meals={meals} />
          </div>
        }
      </div>
    )
  }
}






