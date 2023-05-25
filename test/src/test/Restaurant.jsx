import React from "react";

function Restaurant(props){
    return(
        <div>
            <h1>{`메뉴 : ${props.menu}`}</h1>
        </div>
    );
}
export default Restaurant;