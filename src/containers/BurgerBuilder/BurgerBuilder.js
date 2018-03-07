import React, { Component } from 'react';
import Group from "../../hoc/Group";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render () {
    return (
      <Group>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Group>
    );
  }
}

export default BurgerBuilder;