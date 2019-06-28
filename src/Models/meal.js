import React, { Component } from "react";
import Foods from '../Listings/foods';
import * as calculator from '../Helpers/calculator.js'; 

export default class Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodsAreOpen: false,
      totalCalories: 0,
      update: props.update,
      foods: props.meal.foods,
      id: props.meal.id,
      title: props.meal.title,
      day: props.meal.day,
      date: props.meal.date,
      time: props.meal.time,
      total_calories: props.meal.total_calories,
      health_rating: props.meal.health_rating
    };
  }

  componentDidMount() {
    this.setState({
      totalCalories: calculator.calculateTotalMealCalories(this.props.meal)
    })
  }

  showFoods = () => {
    if (this.state.foodsAreOpen === true) {
      this.setState({ foodsAreOpen: false });
    } else {
      this.setState({ foodsAreOpen: true });
    }
  }

  onUpdateText = event => {
    console.log('updating text')
    console.log(event.target)
    this.setState({ [event.target.id]: event.target.value });
  };

  saveMeal = e => {
    e.preventDefault();
    console.log('meal has been saved')

    this.setState({
      update: false
    })

  };


  render() {
    const { removeMeal } = this.props;
    return (
      <div>
        { !this.state.update ? 
          <div>
            <div style={{ display: 'flex'}}>
              <span style={{ flex: 1 }}>{this.state.title}</span>
              <span style={{ flex: 1 }}>{this.state.day}</span>
              <span style={{ flex: 1 }}>{this.state.date}</span>
              <span style={{ flex: 1 }}>{this.state.time}</span>
              <span style={{ flex: 1 }}>{this.state.totalCalories}</span>
              <span style={{ flex: 1 }}>{this.state.health_rating}</span>
              <span style={{ flex: 1 }}><button onClick={() => this.showFoods()}>show foods</button></span>
              <span style={{ flex: 1 }}>
                <button onClick={() => this.setState({ update: true })}>Edit Meal</button>
              </span>
              <span style={{ flex: 1 }}>
                <button onClick={() => removeMeal(this.state.id)}>Remove Meal</button>
              </span>
            </div>
            {this.state.foodsAreOpen ? <Foods foodList={this.state.foods} /> : <div></div>}
          </div> : 
          <div>
            <form onSubmit={this.saveMeal}>
              <div style={{ display: 'flex'}}>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="title here" id="title" value={this.state.title} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="day here" id="day" value={this.state.day} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="date here" id="date" value={this.state.date} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="time here" id="time" value={this.state.time} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="total_calories here" id="total_calories" value={this.state.total_calories} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="health_rating here" id="health_rating" value={this.state.health_rating} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  add foods
                </span>
                <span style={{ flex: 1 }}>
                  <button type="submit">Save Meal</button>
                </span>
                <span style={{ flex: 1 }}>
                  <button onClick={() => removeMeal(this.state.id)}>Remove Meal</button>
                </span>
              </div>
            </form>
          </div>
        }
      </div>
    );
  }
}


