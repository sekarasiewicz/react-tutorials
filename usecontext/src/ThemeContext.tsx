import React from 'react'

export const ThemeContext = React.createContext('light');
export const ThemeUpdateContext = React.createContext(() => {});

export const useTheme = () => React.useContext(ThemeContext);
export const useThemeUpdate = () => React.useContext(ThemeUpdateContext);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
      {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
