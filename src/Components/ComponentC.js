import React, { Component } from 'react';

class ComponentC extends Component{
    constructor(props){
        super(props);
    }


    componentWillUnmount(){
        console.log('ComponentWillUnmount Called...')
    }

    render(){
        const { xyz } = this.props;
        return (
            <div>
                Component C
                <h3> Getting Props: {xyz}</h3>

            </div>
        )
    }
}

export default ComponentC;