import React, { Component } from 'react';
import Group from "../../hoc/Group";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
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