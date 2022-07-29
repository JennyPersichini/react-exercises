import React from 'react'
import ClickCounter from './ClickCounter'
import ClickTracker from './ClickTracker'

export default class App extends React.Component {
    render() {
        return (
          <div>
            <ClickCounter initialValue={50} incrementBy={2}/>
            <ClickTracker />
            </div>
        )
    }
}
