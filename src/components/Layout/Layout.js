import React from 'react';
import Group from '../../hoc/Group';

const layout = (props) => (
  <Group>
    <div>
      Toolbar, Sidebar, Backdrop
    </div>
    <main>
      {props.children}
    </main>
  </Group>
);

export default layout;