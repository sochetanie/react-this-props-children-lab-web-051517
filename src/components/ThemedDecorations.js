// Code ThemedDecoration Component Here
import React from 'react'

export default class ThemedDecoration extends React.Component {

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            className: this.props.theme
            })
          })
        }
      </div>
      )
  }

}