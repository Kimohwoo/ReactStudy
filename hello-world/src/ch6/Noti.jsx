//자식 컴포넌트처럼 사용할 예정
//부모 컴포넌트 해당 Noti(목록 요소) -> 리스트
//css요소를 설정하거나, scss, sass 관련 내용이, 15장에서 나오는데, 뒤에서 설명을
//지금은 해당 클래스 컴포넌트, 함수형 컴포넌트, 해당 파일안에 css 같이 작업을 하겠음.
//원래는 css 파일을 분리

import React, { Component } from 'react';

//순서 1: css 구성
//변수 선언할 때, 타입은 기본은 const로 선언해서 사용하고,
//만약 변경이 되는 값이면, let 사용하면 됨
const styles = {

    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16
    },

    messageText: {
        color: "green",
        fontSize: 28
    }

}

class Noti extends Component {

    constructor(props){
        //state 사용시 마치 세트처럼 이용이 된다.
        //클래스 컴포넌트에서는 해당 state상태에 접근시 this.state로 접근한다.
        super(props);
        this.state = {

        }
    }

    //자식 부분에서 각 생명주기 함수를 콘솔로 찍어서 확인해보기

    componentDidMount(){
        console.log("componentDidMount호출 되었음")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate호출 되었음")
    }
    componentWillUnmount(){
        console.log(" componentWillUnmount호출 되었음")
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Noti;