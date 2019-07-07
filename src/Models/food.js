import React, { Component } from "react";

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
          <div style={{ display: 'flex'}}>
            <span style={{ flex: 1 }}>{this.state.name}</span>
            <span style={{ flex: 1 }}>{this.state.serving_count}</span>
            <span style={{ flex: 1 }}>{this.state.total_calories}</span>
            <span style={{ flex: 1 }}><button className="btn btn-secondary" onClick={() => this.setState({ isUpdating: true })}>Edit Existing Food</button></span>
            <span style={{ flex: 1 }}><button className="btn btn-secondary" onClick={() => removeExistingFood(this.state.id)}>Remove Existing Food</button></span>
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
                  <button className="btn btn-secondary" type="submit">Save Existing Food</button>
                </span>
                <span style={{ flex: 1 }}>
                  <button className="btn btn-secondary" onClick={() => removeExistingFood(this.state.id)}>Remove Existing Food</button>
                </span>
              </div>
            </form>
          </div>
          : <span></span>
        }
        { this.state.newlyAddedFood && !this.state.isUpdating ?
          <div>
            show
          </div> : <span></span>
        }
        { this.state.newlyAddedFood && this.state.isUpdating ?
          <div>
            <form onSubmit={(e) => saveFood(e,this.state)} >
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
                  <button className="btn btn-secondary" type="submit">Save Food</button>
                </span>
                <span style={{ flex: 1 }}>
                  <button className="btn btn-secondary" onClick={() => removeFood(this.state.id)}>Remove Food</button>
                </span>
              </div>
            </form>
          </div> : <span></span>
        }
      </div>
    );
  }
}

