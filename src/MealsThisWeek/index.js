import React, { Component } from "react";
import Days from '../Listings/days';

export default class MealsThisWeek extends Component {
	// super(props);
	state = {
		meals: [
      {
        'id' : 1,
        'title' : 'McDonalds For Lunch',
        'time' : '12:00',
        'day_of_the_week' : 'Monday',
        'week_of_the_month' : 1,
        'health_rating' : 2.0,
        'foods' : [
          {
            'id' : 1,
            'name' : 'bread',
            'serving_count' : 3,
            'total_calories' : 300
          },
          {
            'id' : 2,
            'name' : 'beef',
            'serving_count' : 2,
            'total_calories' : 800
          }
        ]
      },
      {
        'id' : 2,
        'title' : 'McDonalds For Dinner',
        'time' : '22:00',
        'day_of_the_week' : 'Monday',
        'week_of_the_month' : 1,
        'health_rating' : 1.0,
        'foods' : [
          {
            'id' : 3,
            'name' : 'breadypoo',
            'serving_count' : 6,
            'total_calories' : 600
          },
          {
            'id' : 4,
            'name' : 'manbeef',
            'serving_count' : 4,
            'total_calories' : 1600
          },
          {
            'id' : 5,
            'name' : 'Coca Polaka Bennypoo',
            'serving_count' : 1,
            'total_calories' : 300
          }
        ]
      },
      {
        'id' : 3,
        'title' : 'McDonalds For Bennypoo Again',
        'time' : '22:00',
        'day_of_the_week' : 'Monbenfunday',
        'week_of_the_month' : 1,
        'health_rating' : 1.0,
        'foods' : [
          {
            'id' : 6,
            'name' : 'breadisbad',
            'serving_count' : 6,
            'total_calories' : 600
          },
          {
            'id' : 7,
            'name' : 'manbeef',
            'serving_count' : 4,
            'total_calories' : 1600
          },
          {
            'id' : 8,
            'name' : 'Coca Poca',
            'serving_count' : 1,
            'total_calories' : 300
          }
          ,
          {
            'id' : 9,
            'name' : 'benpoo',
            'serving_count' : 1,
            'total_calories' : 500
          }
        ]
      }
    ]
	}

	render() {
		const { meals } = this.state;
    return (
    	<div>
    		<Days meals={meals} />
    	</div>
    )
  }
}









