import React  from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export const FunctionalContextComponent: React.FC = () => {
  const theme = useTheme();
  const themeUpdate = useThemeUpdate();

  const themeStyles = (dark: boolean) => {
    return {
      backgroundColor: dark ? '#222' : '#eee',
      color: dark ? '#eee' : '#222',
      padding: '2rem',
      margin: '2rem'
    }
  }

  return (
    <>
      <button onClick={themeUpdate}>Toggle Theme</button>
      <div style={themeStyles(theme === 'dark')}>
        <h1>Functional Context Component</h1>
      </div>
    </>
  );
}
