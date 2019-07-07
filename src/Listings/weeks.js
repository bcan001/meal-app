import React, { Component } from "react";
import WeekHeader from '../Headers/weekHeader';
import Week from '../Models/week';


export default class Weeks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterMealsByWeekOfTheMonth(weekOfTheMonth) {
    let { meals } = this.props;
    // let filteredMeals = meals.filter(x => x.week_of_the_month === weekOfTheMonth)
    // return filteredMeals

    // need to add fix later, show all meals everywhere for now
    return meals
  }

  render() {
    // const { meals } = this.props;
    return (
    	<div className='card bg-light'>
    		<WeekHeader />
    		<Week meals={this.filterMealsByWeekOfTheMonth(1)} weekOfTheMonth={1} />
    		<Week meals={this.filterMealsByWeekOfTheMonth(2)} weekOfTheMonth={2} />
    		<Week meals={this.filterMealsByWeekOfTheMonth(3)} weekOfTheMonth={3} />
    		<Week meals={this.filterMealsByWeekOfTheMonth(4)} weekOfTheMonth={4} />
	  	</div>
    );
  }


}
