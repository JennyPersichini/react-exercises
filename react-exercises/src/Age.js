import React from 'react';
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class Age extends React.Component {
    render() {
        return ( 
            <p>Your age is {this.props.age}</p>
        )
    }

    static defaultProps = {
        age: '27',
      };
}


root.render(<Age />);