import React from 'react';

export default class Age extends React.Component {
    render() {
      return (
          <div>
           <p>Your age is {this.props.age >= 18 && <p>{this.props.age}</p>}</p>
          </div>
          ) 
    }
  }

    /* static defaultProps = {
        age: '27',
      }; */
 