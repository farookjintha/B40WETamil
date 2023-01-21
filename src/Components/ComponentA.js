import React, { Component } from 'react';

class ComponentA extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            name: '',
            city: ''
        }
    }
    names = ['Arun','Michael', 'Karthik', 'Dinesh', 'Priya'];

    increment = () => {
        console.log('Incrementing...')
        this.setState({counter: this.state.counter + 1, name: this.names[this.state.counter + 1], city: 'Chennai'});
    }

    decrement = () => {
        console.log('Decrementing...')
        this.setState({counter: this.state.counter - 1, name: this.names[this.state.counter - 1], city: 'Chennai'});
    }

    userDetails = [
        {
            name: 'Arun',
            age: 12,
            city: 'Chennai'
        },
        {
            name: 'Karthik',
            age: 11,
            city: 'Bangalore'
        },
        {
            name: 'Preethi',
            age: 10,
            city: 'Trichy'
        },
        {
            name: 'John',
            age: 13,
            city: 'Coimbatore'
        }
    ]



    render(){
        return (
            <div>
                <h2>Counter: {this.state.counter}</h2>
                {this.state.counter > 0  ? <h3>Name: {this.state.name}</h3> : <h3> Name not found</h3>}
                {this.state.counter > 0 ?  <h3>City: {this.state.city}</h3> : <h3> City not found</h3>}
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <h1>:::::User Details::::</h1>
                {this.userDetails.map((user, i) => (
                    <div key={i}>
                        <h3>Name: {user.name}</h3>
                        <h3>Age: {user.age}</h3>
                        <h3>City: {user.city}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default ComponentA;