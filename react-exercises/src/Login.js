import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'))
export default class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false
    }

    handleUsernameInputChange = (event) => {
        this.setState({username: event.target.value})
    }

    handlePasswordInputChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleRememberInputChange = (event) => {
        this.setState({remember: event.target.checked})
    }

    render() {
        return (
            <div>
                <input name='username' placeholder='username' value={this.state.username} onChange={this.handleUsernameInputChange}/>
                <input name='password' placeholder='password' type='password' value={this.state.password} onChange={this.handlePasswordInputChange}/>
                <input name='remember' type='checkbox' checked={this.state.remember} onChange={this.handleRememberInputChange}/>
            </div>
        )
    }
}

root.render(<Login />)
