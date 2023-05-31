import React, { Component } from 'react';
import MenuItem from './MenuItem';

const resultMenu = [
    {id:1, menu:"파스타"},
    {id:2, menu:"치킨"},
    {id:3, menu:"피자"},
    {id:4, menu:"파스타"},
    {id:5, menu:"파스타"},
    {id:6, menu:"파스타"},
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
                this.setState(
                    {
                        menuItem: []
                    }
                )
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.menuItem.map(
                    (menuItem) => {
                        return <MenuItem key={menuItem.id} id={menuItem.id} menu={menuItem.menu} />
                    }
                )}
            </div>
        );
    }
}

export default MenuItemList;