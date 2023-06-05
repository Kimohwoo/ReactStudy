//부모 컴포넌트

import React, { Component } from 'react';
import Noti from './Noti';

//임시 더미 데이터를 배열로 요소는 객체를 가지는 배열 만들기

const reserveNoti = [
    {id:1, message: "메세지1"},
    {id:2, message: "메세지2"},
    {id:3, message: "메세지3"}
]

//클래스 내부에 전역 처럼 사용하기 위해서 
var timer;

//클래스형 컴포넌트, 기본, Component 상속
//Constructor, super를 사용함 이유는 props 및 state 사용하기 위해
class NotiList extends Component {

    constructor(props){
        super(props);
        //상태 변화가, noti라는 배열이 변하면, 업데이트가 발생함
        //즉 다시 그린다.
        this.state = {
            noti: []
        };
    }

    //생명주기 확인 마운트, 업데이트, 언마운트
    //componentDidMount 확인
    componentDidMount(){
        const {noti} = this.state;
        //매개변수 2개. 첫번째 콜백함수 두번쨰 특정시간
        timer = setInterval(() => {
            if(noti.length < reserveNoti.length){
                const index = noti.length;
                noti.push(reserveNoti[index]);
                this.setState(
                    {
                        noti: noti
                    }
                )
            } else {
                // clearInterval(timer);
                // componentWillUnmount 콘솔에 띄우기 위해, 해당 데이터 비워 주는 작업
                //데이터가 비워지면, 그릴게 없어서 사라진다.
                this.setState({
                    noti:[]
                })
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.noti.map(
                    (noti) => {
                        return <Noti key={noti.id} id={noti.id} message={noti.message} />
                    }
                )}
            </div>
        );
    }
}


export default NotiList;