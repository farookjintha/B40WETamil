import React, { Component } from 'react';
import ComponentC from './ComponentC';

class ComponentB extends Component{
    constructor(props){
        super(props);
        // console.log('Constructor Called...')
        this.state = {
            counter: 0,
            showChild: true
        }
    }

    // componentDidMount = () => {
    //     console.log('ComponentDidMount Called....')
    // }

    // componentDidUpdate = () => {
    //     console.log('ComponentDidUpdate Called...')
    // }

    handleClick = () => {
        this.setState({counter: this.state.counter + 1});
    }

    // removeChild = () => {
    //     this.setState({showChild: false});
    // }

    render(){
        // console.log('Render Called...')
        return (
            <div>
                Component B
                <h3>State Count: {this.state.counter}</h3>
                <button onClick={this.handleClick}>Click!</button>
                <button onClick={this.removeChild}>Delete!</button>
                {this.state.showChild && <ComponentC xyz={this.state.counter} />}
            </div>
        )
    }
}

export default ComponentB;