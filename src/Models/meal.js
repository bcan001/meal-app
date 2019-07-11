import React, { Component } from "react";
import Foods from '../Listings/foods';
import * as calculator from '../Helpers/calculator.js'; 

// https://react-icons.netlify.com/#/
import { FaFolder } from "react-icons/fa"; // view foods
import { FaRegFolderOpen } from "react-icons/fa"; // view foods when open
import { MdCreate } from "react-icons/md"; // edit meal
import { IoMdClose } from "react-icons/io"; // destroy meal
import { FaSave } from "react-icons/fa"; // save meal



export default class Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodsAreOpen: props.meal.foodsAreOpen,
      totalCalories: 0,
      foods: props.meal.foods,
      id: props.meal.id,
      title: props.meal.title,
      day_of_the_week: props.meal.day_of_the_week,
      date: props.meal.date,
      time: props.meal.time,
      health_rating: props.meal.health_rating,
      newlyAddedMeal: props.meal.newlyAddedMeal,
      isUpdating: props.meal.isUpdating
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      foodsAreOpen: nextProps.meal.foodsAreOpen,
      newlyAddedMeal: nextProps.meal.newlyAddedMeal,
      isUpdating: nextProps.meal.isUpdating
      // totalCalories: calculator.calculateTotalMealCalories(nextProps.meal)
    })
  }

  componentDidMount() {
    // this.setState({
    //   totalCalories: calculator.calculateTotalMealCalories(this.props.meal)
    // })
  }

  showFoods = () => {
    if (this.state.foodsAreOpen === true) {
      this.setState({ foodsAreOpen: false });
    } else {
      this.setState({ foodsAreOpen: true });
    }
  }

  onUpdateText = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  // moving methods from foods to be able to edit foods too:
  addFood = async () => {
    let { foods } = this.state;
    
    let newFood = {
      id: foods.length + 1,
      name: '',
      serving_count: 0,
      total_calories: 0,
      newlyAddedFood: true,
      isUpdating: true
    }

    this.setState({
      foods: [...foods,newFood]
    })
  }

  saveFood = async (e,food) => {
    e.preventDefault();

    let { foods } = this.state;
    let newFood = {
      id: food.id,
      name: food.name,
      serving_count: parseInt(food.serving_count),
      total_calories: parseInt(food.total_calories),
    }

    const i = foods.findIndex(x => x.id === food.id);
    const updatedFoods = [...foods.slice(0, i), {...newFood}, ...foods.slice(i + 1)];
    this.setState({ foods: updatedFoods });

    let existingMeal = {
      id: this.state.id,
      title: this.state.title,
      day_of_the_week: this.state.day_of_the_week,
      date: this.state.date,
      time: this.state.time,
      health_rating: this.state.health_rating,
      foods: [...foods.slice(0, i), {...newFood}, ...foods.slice(i + 1)]
    }
    const res = await fetch(`http://localhost:3004/meals/${existingMeal.id}`, {
      method: 'PUT',
      body: JSON.stringify(existingMeal),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const newMeal = await res.json();
  }

  saveExistingFood = async (e,food) => {
    e.preventDefault();

    let { foods } = this.state;
    let newFood = {
      id: food.id,
      name: food.name,
      serving_count: parseInt(food.serving_count),
      total_calories: parseInt(food.total_calories),
    }

    // find updated meal in meals and update it
    const i = foods.findIndex(x => x.id === food.id);
    const updatedFoods = [...foods.slice(0, i), {...newFood}, ...foods.slice(i + 1)];
    this.setState({ foods: updatedFoods });

    // update the backend too. needs to change eventually
    let existingMeal = {
      id: this.state.id,
      title: this.state.title,
      day_of_the_week: this.state.day_of_the_week,
      date: this.state.date,
      time: this.state.time,
      health_rating: this.state.health_rating,
      foods: [...foods.slice(0, i), {...newFood}, ...foods.slice(i + 1)]
    }
    const res = await fetch(`http://localhost:3004/meals/${existingMeal.id}`, {
      method: 'PUT',
      body: JSON.stringify(existingMeal),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const newMeal = await res.json();
  }

  removeFood = async foodId => {
    const { foods } = this.state;

    this.setState({
      foods: foods.filter(x => x.id !== foodId),
    });
  };

  removeExistingFood = async foodId => {
    const { foods } = this.state;
    let updatedFoods = foods.filter(x => x.id !== foodId);

    this.setState({
      foods: updatedFoods,
    });

    // db remove:
    let existingMeal = {
      id: this.state.id,
      title: this.state.title,
      day_of_the_week: this.state.day_of_the_week,
      date: this.state.date,
      time: this.state.time,
      total_calories: 0,
      health_rating: this.state.health_rating,
      foods: updatedFoods
    }
    const res = await fetch(`http://localhost:3004/meals/${existingMeal.id}`, {
      method: 'PUT',
      body: JSON.stringify(existingMeal),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const newMeal = await res.json();
  };
  // ---------------------------------------------


  render() {
    const { saveMeal,saveExistingMeal,removeMeal,removeExistingMeal } = this.props;

    return (
      <div className='card'>
        { !this.state.newlyAddedMeal && !this.state.isUpdating ?
          <div>
            <div className='row'>
              <span className='col-sm'>{this.state.title}</span>
              <span className='col-sm'>{this.state.time}</span>
              <span className='col-sm'>{calculator.calculateTotalMealCalories(this.state.foods)}</span>
              <span className='col-sm'>{this.state.health_rating}</span>
              <span className='col-sm'>
                <button className="btn btn-primary" onClick={() => this.showFoods()}><FaFolder /></button>
                <button className="btn btn-primary" onClick={() => this.setState({ isUpdating: true })}><MdCreate /></button>
                <button className="btn btn-primary" onClick={() => this.props.removeExistingMeal(this.state.id)}><IoMdClose /></button>
              </span>
            </div>
            {this.state.foodsAreOpen ? <Foods foodList={this.state.foods} addFood={this.addFood} saveFood={this.saveFood} saveExistingFood={this.saveExistingFood} removeFood={this.removeFood} removeExistingFood={this.removeExistingFood} /> : <div></div>}
          </div>
          : <span></span>
        }
        { !this.state.newlyAddedMeal && this.state.isUpdating ?
          <div>
            <form onSubmit={(e) => saveExistingMeal(e,this.state)} >
              <div className='row'>
                <span className='col-sm'>
                  <input type="text" placeholder="title here" id="title" value={this.state.title} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <input type="text" placeholder="time here" id="time" value={this.state.time} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  &nbsp;
                </span>
                <span className='col-sm'>
                  <input type="text" placeholder="health_rating here" id="health_rating" value={this.state.health_rating} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <button className="btn btn-primary" type="submit"><FaSave /></button>
                  <button className="btn btn-primary" onClick={() => removeExistingMeal(this.state.id)}><IoMdClose /></button>
                </span>
              </div>
            </form>
          </div>
          : <span></span>
        }
        { this.state.newlyAddedMeal && !this.state.isUpdating ?
          <div>
            fluffy bunnies go bang
            <div className='row'>
              <span className='col-sm'>{this.state.title}</span>
              <span className='col-sm'>{this.state.time}</span>
              <span className='col-sm'>{calculator.calculateTotalMealCalories(this.state.foods)}</span>
              <span className='col-sm'>{this.state.health_rating}</span>
              <span className='col-sm'>
                <button className="btn btn-primary" onClick={() => this.showFoods()}><FaFolder /></button>
                <button className="btn btn-primary" onClick={() => this.setState({ isUpdating: true })}><MdCreate /></button>
                <button className="btn btn-primary" onClick={() => this.props.removeMeal(this.state.id)}><IoMdClose /></button>
              </span>
            </div>
            {this.state.foodsAreOpen ? <Foods foodList={this.state.foods} addFood={this.addFood} saveFood={this.saveFood} saveExistingFood={this.saveExistingFood} removeFood={this.removeFood} removeExistingFood={this.removeExistingFood} /> : <div></div>}
          </div>
          : <span></span>
        }
        { this.state.newlyAddedMeal && this.state.isUpdating ?
          <div>
            <form onSubmit={(e) => saveMeal(e,this.state)} >
              <div className='row'>
                <span className='col-sm'>
                  <input type="text" placeholder="title here" id="title" value={this.state.title} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <input type="text" placeholder="time here" id="time" value={this.state.time} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  &nbsp;
                </span>
                <span className='col-sm'>
                  <input type="text" placeholder="health_rating here" id="health_rating" value={this.state.health_rating} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <button className="btn btn-primary" type="submit"><FaSave /></button>
                  <button className="btn btn-primary" onClick={() => removeMeal(this.state.id)}><IoMdClose /></button>
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





