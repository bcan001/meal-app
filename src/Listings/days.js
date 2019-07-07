import React, { Component } from "react";
import DayHeader from '../Headers/dayHeader';
import Day from '../Models/day';

export default class Days extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  filterMealsByDayOfTheWeek(dayOfTheWeek) {
    let { meals } = this.props;
    let filteredMeals = meals.filter(x => x.day_of_the_week === dayOfTheWeek)

    console.log('meals this week');
    console.log(meals);
    console.log(filteredMeals);

    return filteredMeals
  }

  render() {
  	const { meals } = this.props;

    return (
    	<div className='card bg-warning'>
    		<DayHeader />
    		<Day meals={this.filterMealsByDayOfTheWeek('Monday')} dayOfTheWeek={'Monday'} />
    		<Day meals={this.filterMealsByDayOfTheWeek('Tuesday')} dayOfTheWeek={'Tuesday'} />
    		<Day meals={this.filterMealsByDayOfTheWeek('Wednesday')} dayOfTheWeek={'Wednesday'} />
    		<Day meals={this.filterMealsByDayOfTheWeek('Thursday')} dayOfTheWeek={'Thursday'} />
    		<Day meals={this.filterMealsByDayOfTheWeek('Friday')} dayOfTheWeek={'Friday'} />
    		<Day meals={this.filterMealsByDayOfTheWeek('Saturday')} dayOfTheWeek={'Saturday'} />
    		<Day meals={this.filterMealsByDayOfTheWeek('Sunday')} dayOfTheWeek={'Sunday'} />
    	</div>
    )
  }
}



