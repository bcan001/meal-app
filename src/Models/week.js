import React, { Component } from "react";
import Days from '../Listings/days';
import * as calculator from '../Helpers/calculator.js'; 

export default class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	totalCalories: 0,
      averageHealthRating: 0.00,
    	daysIsOpen: false
    };
  }

  showDays = () => {
    if (this.state.daysIsOpen === false) {
      this.setState({
        daysIsOpen: true
      })
    } else {
      this.setState({
        daysIsOpen: false
      })
    }
  }

  componentDidMount() {
    let { meals } = this.props;
    this.setState({
      totalCalories: calculator.calculateTotalDayCalories(meals),
      averageHealthRating: calculator.calculateAverageDayHealthRating(meals)
    })
  }

  render() {
    const { meals,weekOfTheMonth } = this.props;
    return (
    	<div className='card'>
	    	<div className='row'>
		      <span className='col-sm'>{weekOfTheMonth}</span>
		      <span className='col-sm'>date</span>
		      <span className='col-sm'>date</span>
		      <span className='col-sm'>{this.state.totalCalories}</span>
		      <span className='col-sm'>{this.state.averageHealthRating}</span>
		      <span className='col-sm'><button className="btn btn-info" onClick={() => this.showDays()}>show days</button></span>
	    	</div>
	    	{
	        this.state.daysIsOpen ? 
	        <div>
	          <Days meals={meals} />
	        </div>
	        : <span></span>
	      }
	    </div>
    );
  }


}
