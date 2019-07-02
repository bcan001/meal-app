import React, { Component } from "react";
import MealHeader from '../Headers/mealHeader';
import Meals from '../Listings/meals';
import * as calculator from '../Helpers/calculator.js'; 

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCalories: 0,
      averageHealthRating: 0.00,
      mealsIsOpen: false
    };
  }

  componentDidMount() {
    let { meals } = this.props;
    this.setState({
      totalCalories: calculator.calculateTotalDayCalories(meals),
      averageHealthRating: calculator.calculateAverageDayHealthRating(meals)
    })
  }

  showMeals = () => {
    this.setState({
      mealsIsOpen: !this.state.mealsIsOpen ? true : false
    })
  }

  render() {
    const { meals,dayOfTheWeek } = this.props;

    return (
      <div>
      	<div style={{ display: 'flex'}}>
          <span style={{ flex: 1 }}>{dayOfTheWeek}</span>
          <span style={{ flex: 1 }}>&nbsp;</span>
          <span style={{ flex: 1 }}>{this.state.totalCalories}</span>
          <span style={{ flex: 1 }}>{this.state.averageHealthRating}</span>
          <span style={{ flex: 1 }}><button onClick={() => this.showMeals()}>show meals</button></span>
        </div>
        {
          this.state.mealsIsOpen ? 
          <div style={{ marginLeft: '50px' }}>
            <Meals meals={meals} />
          </div>
          : 
          <div style={{ marginLeft: '50px' }} hidden="true">
            <Meals meals={meals} />
          </div>
        }
      </div>
    )
  }
}






