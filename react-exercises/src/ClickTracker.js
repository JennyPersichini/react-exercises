import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector('#root'));
export default class ClickTracker extends React.Component {
    state = {
        button: ""
    }

    handleButtonClick = (event) => {
        this.setState({
            button: event.target.name
        })
    }

    render() {
        return (
            <div>
                <button name='Button1' onClick={this.handleButtonClick}>Click1</button>
                <button name='Button2' onClick={this.handleButtonClick}>Click2</button>
                <button name='Button3' onClick={this.handleButtonClick}>Click3</button>

                <h1>{this.state.button ? this.state.button : "no buttons were clicked"}</h1>
            </div>
        )
    }
}

root.render(<ClickTracker />)