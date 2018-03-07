import React, { Component } from 'react';
import Group from "../../hoc/Group";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render () {
    return (
      <Group>
        <Burger />
        <div>Build Controls</div>
      </Group>
    );
  }
}

export default BurgerBuilder;