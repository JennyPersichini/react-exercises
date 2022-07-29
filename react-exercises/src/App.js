import React from 'react'
import ClickCounter from './ClickCounter'
import ClickTracker from './ClickTracker'
import InteractiveWelcome from './InteractiveWelcome'
import Login from './Login'

export default class App extends React.Component {
    render() {
        return (
          <div>
            <ClickCounter initialValue={50} incrementBy={2}/>
            <ClickTracker />
            <InteractiveWelcome />
            <Login />
            </div>
        )
    }
}
