import React from 'react'
import ClickCounter from './ClickCounter'

export default class App extends React.Component {
    render() {
        return (
            <ClickCounter initialValue={50} incrementBy={2}/>
        )
    }
}
