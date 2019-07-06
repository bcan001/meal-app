import React, { Component } from "react";

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.food.id,
      name: props.food.name,
      serving_count: props.food.serving_count,
      total_calories: props.food.total_calories,
      newlyAddedFood: this.props.newlyAddedFood,
      isUpdating: this.props.isUpdating
    };
  }

  onUpdateText = event => {
    console.log('updating text')
    console.log(event.target)
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { removeFood,saveExistingFood,removeExistingFood } = this.props;
    return (
      <div>
        { !this.state.newlyAddedFood && !this.state.isUpdating ?
          <div style={{ display: 'flex'}}>
            <span style={{ flex: 1 }}>{this.state.name}</span>
            <span style={{ flex: 1 }}>{this.state.serving_count}</span>
            <span style={{ flex: 1 }}>{this.state.total_calories}</span>
            <span style={{ flex: 1 }}><button onClick={() => this.setState({ isUpdating: true })}>Edit Food</button></span>
            <span style={{ flex: 1 }}><button onClick={() => removeExistingFood(this.state.id)}>Remove Food</button></span>
          </div> : <span></span> 
        }
        { !this.state.newlyAddedFood && this.state.isUpdating ?
          <div>
            <form onSubmit={(e) => saveExistingFood(e,this.state)} >
              <div style={{ display: 'flex'}}>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="name here" id="name" value={this.state.name} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="serving_count here" id="serving_count" value={this.state.serving_count} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  <input type="text" placeholder="total_calories here" id="total_calories" value={this.state.total_calories} onChange={this.onUpdateText}/>
                </span>
                <span style={{ flex: 1 }}>
                  <button type="submit">Save Existing Food</button>
                </span>
                <span style={{ flex: 1 }}>
                  <button onClick={() => removeExistingFood(this.state.id)}>Remove Existing Food</button>
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

