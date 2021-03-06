import React, { Component } from "react";
import Weeks from '../Listings/weeks';
import { API } from '../Api/utils';

export default class MealsThisMonth extends Component {
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
      this.setState({ meals: data[0] });
    } catch (error) {
      console.log('API REQUEST FAILED');
    }
  };

	render() {
		const { meals } = this.state;
    return (
    	<div>
    		<Weeks meals={meals} />
    	</div>
    )
  }
}





