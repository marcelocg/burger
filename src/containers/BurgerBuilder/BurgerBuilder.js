import React, { Component } from 'react';
import Group from "../../hoc/Group";

class BurgerBuilder extends Component {
  render () {
    return (
      <Group>
        <div>Burger</div>
        <div>Build Controls</div>
      </Group>
    );
  }
}

export default BurgerBuilder;