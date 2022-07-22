import React from 'react';
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export default class Welcome extends React.Component {
    render() {
        return (
        <p> Welcome, {this.props.name} !</p>
        )
    }

    static defaultProps = {
        name: "Valerio",
     }
}

root.render(<Welcome />);