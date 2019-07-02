import React, { Component } from "react";
import Foods from '../Listings/foods';
import * as calculator from '../Helpers/calculator.js'; 

export default class Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodsAreOpen: false,
      totalCalories: 0,
      foods: props.meal.foods,
      id: props.meal.id,
      title: props.meal.title,
      day_of_the_week: props.meal.day,
      date: props.meal.date,
      time: props.meal.time,
      total_calories: props.meal.total_calories,
      health_rating: props.meal.health_rating,
      update: props.meal.update
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      update: nextProps.update
    })
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

  // problems:
  // 1. remove meal for meal that is not saved needs to be a different function
  // 2. save meal for meal that already has been saved needs to be a different function
  // 3. conclusion: 2 'form' components need to exist 
    // - meal that already existed in the db
    // - meal that has been added on the fly
    // MOVE RENDER FUNCTION TERINARY INTO AN IF STATEMENT

  render() {
    const { removeMeal,saveMeal,saveExistingMeal } = this.props;
    return (
      <div>
        { !this.state.update ? 
          <div>
            <div style={{ display: 'flex'}}>
              <span style={{ flex: 1 }}>{this.state.title}</span>
              <span style={{ flex: 1 }}>{this.state.day_of_the_week}</span>
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
            <form onSubmit={(e) => saveMeal(e,this.state)}>
              <div style={{ display: 'flex'}}>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="title here" id="title" value={this.state.title} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="day here" id="day_of_the_week" value={this.state.day} onChange={this.onUpdateText}/>
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


