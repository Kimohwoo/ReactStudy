import React, { Component } from 'react';

class Toggle extends Component {

    constructor(props){
        super(props)
        this.state = {isToggleOn: true}

        this.handelClick = this.handelClick.bind(this);
    }

    handelClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handelClick}>
                    {this.state.isToggleOn? '켜짐' : '꺼짐'}
                </button>
            </div>
        );
    }
}

export default Toggle;