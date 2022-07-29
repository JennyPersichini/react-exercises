import React from "react";
import reactDOM from "react-dom";

const root = reactDOM.createRoot(document.querySelector("#root"));
class Welcome extends React.Component {
  render() {
    return <h2>Welcome</h2>;
  }
}

export default class InteractiveWelcome extends React.Component {
  state = {
    username: ""
  }

  hendleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="welcome">
        <Welcome />
        <input
          name="username"
          value={this.state.username}
          onChange={this.hendleChange}
        />
      </div>
    )
  }
}

root.render(<InteractiveWelcome />)
