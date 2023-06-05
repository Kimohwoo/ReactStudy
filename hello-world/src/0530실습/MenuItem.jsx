import React, { Component } from 'react';

class MenuItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                {`Menu${this.props.id} = ${this.props.menu}`}
            </div>
        );
    }
}

export default MenuItem;