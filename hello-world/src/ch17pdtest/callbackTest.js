//비동기 통신관련 콜백 함수와 , async, await, promis 간단 설명
//axios, 비동기 통신 하는 방법 설명
//공동데이터 연동 작업

//동기작업 vs 비동기작업
//동기: 순차적으로 작업 진행
//비동기: 자바스크립트에서 스레드가 하나만 있다. 메인 스레드
//멀티 작업을 처리하는 방식
//함수를 실행. non-blocking 개념
//해당 함수가 끝났다라는 신호를 보내게 됨. 콜백함수 상황을 보고를 받는다.

// function print(){
//     console.log("hi 리엑트")
// }

// function increase(number, callback){
//     setTimeout(
//         () => {
//             const result = number + 1
//             if(callback){
//                 callback(result)
//             }
//         },2000
//     )
// }

// 콜백함수, 시간

//ex1
//setTimeout(print, 3000);

//ex2
// increase(10, result => {
//     console.log(result)
// })
// console.log("대기중....")

//ex3 콜백 지옥 보여주기.
// console.log("콜백 지옥 시작")
// increase(0, result => {
//     console.log(result)
//     increase(result, result => {
//         console.log(result)
//         increase(result, result => {
//             console.log(result)
//             increase(result, result => {
//                 console.log(result)
//             })
//         })
//     })
// })

//비동기 작업을 위해서 -> 콜백 함수 도입 || 문제점(콜백지옥) -> es6(Propmise) 문법으로 가독성있게 작업함

//ex4 promise 문법으로 변경

function increase(number){
    const promise = new Promise( (resolve, reject) => {
        setTimeout(
            () => {
                const result2 = number + 10
                if(result2 > 50){
                    const error = new Error("테스트 에러")
                    return reject(error)
                } 
                resolve(result2)
            }, 2000)
    })
    return promise
}

// //promise 버전으로 비동기 함수 처리 비교
// increase(100).then(number => {
//     console.log(number)
//     return increase(number)
// }).then(number => {
//     console.log(number)
//     return increase(number)
// }).then(number => {
//     console.log(number)
//     return increase(number)
// }).then(number => {
//     console.log(number)
//     return increase(number)
// }).catch(error => {
//     console.log("에러")
// })

//async, await 문법을 같이 세트로 작업
//es8 ES2017
//async 함수의 앞부분에 표기, 비동기 작업 할 떄 사용
//await promise 앞부분에 표기를 합니다.

async function runTest(){
    try{
        let result = await increase(10);
        console.log(result)
        result = await increase(result);
        console.log(result)
        result = await increase(result);
        console.log(result)
        result = await increase(result);
        console.log(result)
    } catch(e){
        console.log(e)
    }
}

runTest()

console.log("대기중....")

//axios: 통신 라이브러리 사용할 예정임. Promise 타입으로 리턴함
//더미 데이터를 axios를 이용해서 받아서 
//공공데이터를 이용함. 

//순서1