import React, { Component } from 'react';
import MenuItem from './MenuItem';

const resultMenu = [
    {id=1, menu="파스타"},
    {id=2, menu="치킨"},
    {id=3, menu="피자"},
]

var timer;

class MenuItemList extends Component {

    constructor(props){
        super(props);
        this.state = {
            menuItem: []
        }
    }

    componentDidMount(){
        const {menuItem} = this.state;

        timer = setInterval(() => {
            if(menuItem.length < resultMenu.length){
                const index = menuItem.length
                menuItem.push(resultMenu[index])
                this.setState(
                    {
                        menuItem: menuItem
                    }
                )

            } else {

            }


        }, 1000);

    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MenuItemList;