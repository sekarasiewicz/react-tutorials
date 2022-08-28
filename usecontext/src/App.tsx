import React from 'react';
import './App.css';
import { FunctionalContextComponent } from './FunctionalContextComponent'
import { ClassContextComponent } from './ClassContextComponent'
import { ThemeProvider } from './ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <FunctionalContextComponent />
      <ClassContextComponent />
    </ThemeProvider>
  );
}

export default App;
