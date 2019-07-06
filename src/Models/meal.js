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
      day_of_the_week: props.meal.day_of_the_week,
      date: props.meal.date,
      time: props.meal.time,
      health_rating: props.meal.health_rating,
      newlyAddedMeal: this.props.newlyAddedMeal,
      isUpdating: this.props.isUpdating
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      newlyAddedMeal: nextProps.newlyAddedMeal,
      isUpdating: nextProps.isUpdating
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



  render() {
    const { saveMeal,saveExistingMeal,removeMeal,removeExistingMeal } = this.props;
    return (
      <div>
        { !this.state.newlyAddedMeal && !this.state.isUpdating ?
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
                <button onClick={() => this.setState({ isUpdating: true })}>Edit Existing Meal</button>
              </span>
              <span style={{ flex: 1 }}>
                <button onClick={() => this.props.removeExistingMeal(this.state.id)}>Remove Existing Meal</button>
              </span>
            </div>
            {this.state.foodsAreOpen ? <Foods mealId={this.state.id} foodList={this.state.foods} /> : <div></div>}
          </div>
          : <span></span>
        }
        { !this.state.newlyAddedMeal && this.state.isUpdating ?
          <div>
            <form onSubmit={(e) => saveExistingMeal(e,this.state)} >
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
                  &nbsp;
                </span>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="health_rating here" id="health_rating" value={this.state.health_rating} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  add foods
                </span>
                <span style={{ flex: 1 }}>
                  <button type="submit">Save Existing Meal</button>
                </span>
                <span style={{ flex: 1 }}>
                  <button onClick={() => removeExistingMeal(this.state.id)}>Remove Existing Meal</button>
                </span>
              </div>
            </form>
          </div>
          : <span></span>
        }
        { this.state.newlyAddedMeal && !this.state.isUpdating ?
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
                <button onClick={() => this.setState({ isUpdating: true })}>Edit Meal</button>
              </span>
              <span style={{ flex: 1 }}>
                <button onClick={() => this.props.removeMeal(this.state.id)}>Remove Meal</button>
              </span>
            </div>
            {this.state.foodsAreOpen ? <Foods mealId={this.state.id} foodList={this.state.foods} /> : <div></div>}
          </div>
          : <span></span>
        }
        { this.state.newlyAddedMeal && this.state.isUpdating ?
          <div>
            <form onSubmit={(e) => saveMeal(e,this.state)} >
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
                  &nbsp;
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
          : <span></span>
        }
      </div>
    );
  }
}





