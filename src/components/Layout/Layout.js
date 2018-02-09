import React from 'react';
import Group from '../../hoc/Group';
import classes from "./Layout.css";

const layout = (props) => (
  <Group>
    <div>
      Toolbar, Sidebar, Backdrop
    </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Group>
);

export default layout;