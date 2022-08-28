import { Component } from 'react'
import { ThemeContext } from './ThemeContext'

export class ClassContextComponent extends Component<any, any> {
  themeStyles(dark: boolean) {
    return {
      backgroundColor: dark ? '#222' : '#eee',
      color: dark ? '#eee' : '#222',
      padding: '2rem',
      margin: '2rem'
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div style={this.themeStyles(theme === 'dark')}>
            <h1>Class Context Component</h1>
          </div>
        )
        }
      </ThemeContext.Consumer>
    )
  }
}
