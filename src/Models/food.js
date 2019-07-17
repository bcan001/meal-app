import React, { Component } from "react";

// need edit,save,remove icons

import { MdCreate } from "react-icons/md"; // edit meal
import { IoMdClose } from "react-icons/io"; // destroy meal
import { FaSave } from "react-icons/fa"; // save meal

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.food.id,
      name: props.food.name,
      serving_count: props.food.serving_count,
      total_calories: props.food.total_calories,
      newlyAddedFood: props.food.newlyAddedFood,
      isUpdating: props.food.isUpdating
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      newlyAddedFood: nextProps.food.newlyAddedFood,
      isUpdating: nextProps.food.isUpdating
    })
  }

  onUpdateText = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { addFood,saveFood,saveExistingFood,removeFood,removeExistingFood } = this.props;
    return (
      <div>
        { !this.state.newlyAddedFood && !this.state.isUpdating ?
          <div className='row'>
            <span className='col-sm'>{this.state.name}</span>
            <span className='col-sm'>{this.state.serving_count}</span>
            <span className='col-sm'>{this.state.total_calories}</span>
            <span className='col-sm'>
              <button className="btn btn-secondary" onClick={() => this.setState({ isUpdating: true })}><MdCreate /></button>
              <button className="btn btn-secondary" onClick={() => removeExistingFood(this.state.id)}><IoMdClose /></button>
            </span>
          </div> : <span></span> 
        }
        { !this.state.newlyAddedFood && this.state.isUpdating ?
          <div>
            <form onSubmit={(e) => saveExistingFood(e,this.state)} >
              <div className='row'>
                <span className='col-sm'>
                  <input type="text" placeholder="name here" id="name" value={this.state.name} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <input type="text" placeholder="serving_count here" id="serving_count" value={this.state.serving_count} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <input type="text" placeholder="total_calories here" id="total_calories" value={this.state.total_calories} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <button className="btn btn-secondary" type="submit"><FaSave /></button>
                </span>
              </div>
            </form>
          </div>
          : <span></span>
        }
        { this.state.newlyAddedFood && !this.state.isUpdating ?
          <div>
            fluffy bunnies go bang 2
          </div> : <span></span>
        }
        { this.state.newlyAddedFood && this.state.isUpdating ?
          <div>
            <form onSubmit={(e) => saveFood(e,this.state)} >
              <div className='row'>
                <span className='col-sm'>
                  <input type="text" placeholder="name here" id="name" value={this.state.name} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <input type="text" placeholder="serving_count here" id="serving_count" value={this.state.serving_count} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <input type="text" placeholder="total_calories here" id="total_calories" value={this.state.total_calories} onChange={this.onUpdateText}/>
                </span>
                <span className='col-sm'>
                  <button className="btn btn-secondary" type="submit"><FaSave /></button>
                  <button className="btn btn-secondary" onClick={() => removeFood(this.state.id)}><IoMdClose /></button>
                </span>
              </div>
            </form>
          </div> : <span></span>
        }
      </div>
    );
  }
}

