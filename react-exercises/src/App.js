import React from 'react'
import Counter from './Count'

export default class App extends React.Component {
    render() {
        return (
            <Counter initialValue={50} incrementBy={2} timeout={1000}/>
        )
    }
}