import React from 'react';
import Home from './src/pages/Home';
import {TaskProvider} from './src/context/TaskContext';

function App(): React.JSX.Element {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}

export default App;
