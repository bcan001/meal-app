import React, { Component } from "react";
import Meals from '../Listings/meals';
import { API } from '../Api/utils';

export default class MealsToday extends Component {
	// super(props);
	state = {
		meals: []
	}

  componentDidMount() {
    this.fetchAPI();
  }

  // https://github.com/bcan001/full-scale-app-react/blob/5015ef6e3be13fe5178b9aa7e309b5644c7cf0a2/src/Screens/Home/index.js
  fetchAPI = async () => {
    try {
      const mealsAPI = API({ uri: 'http://localhost:3004/meals' });

      const data = await Promise.all([mealsAPI]);

      console.log('sdfasdfasdfasdfasfasdf')
      console.log(data[0])

      this.setState({ meals: data[0] });

      console.log('current state')
      console.log(this.state)

    } catch (error) {
      // this.setState({ loading: false, error: 'Oops! something went wrong' });
      console.log('something went wrong');
    }
  };


	render() {
		const { meals } = this.state;
    console.log('stuffy')
    console.log(meals)
    console.log('stuffy2')

    return (
    	<div>
    		<Meals meals={meals} />
    	</div>
    )
  }
}



