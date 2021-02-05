var 후보군 = Array(45).fill().map(function(요소,인덱스){
    return 인덱스+1;
})
// array 는 빈 정렬 만들기 ()안의 숫자는 빈 값의 숫자 // fill 은 채워넣는 함수, ()를 통해서 빈값을 데이터 입력
// map은 매칭함수, 인덱스에 +1를 추가해서 빈값에 인덱스 값을 매칭한 데이터를 만든다.  그 값이 후보군으로 정의됨

console.log(후보군)
// 후보군 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
// 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
var 셔플 = []
while (후보군.length > 0) {
   var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0];
   셔플.push(이동값)
};
// splice는 특정값을 잘라내는 함수, (a,b)는 a 부터 b까지를 잘라낸다는 의미
// splice 특성상 배열로 데이터 출력한다. 따라서 그 배열값에서 [0]번째 데이터를 이동값으로 정의
// 그 정의된 이동값을 셔플배열 값에 하나씩 넣는다
// splice는 지정한 값부터의 순서값을 이용한 잘라내기 / slice는 전체값을 기준으로 처음과 끝을 지정하는 함수

console.log(셔플);
var 보너스 = 셔플[셔플.length-1];
var 당첨 = 셔플.slice(0,6);
// slice는 특정값을 잘라낼때 쓴다.(시작값부터 끝나는 값까지)
console.log("당첨", 당첨.sort(function(p,c){return p-c;}) , "보너스", 보너스);

var 결과창 = document.getElementById('결과창')

function 공색칠하기 (숫자, 결과창){
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display='inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px'
    공.style.width = '20px'
    공.style.height = '20px'
    공.style.textAlign = 'center'
    결과창.append(공);
    공.style.marginRight = '5px'
    공.style.fontSize = "10px"
    if(숫자 < 11){
        배경색 = 'red'
    }
    else if (숫자 < 21){
        배경색 = 'orange'
    }
    else if (숫자 < 31){
        배경색 = 'yellow'
    }
    else if (숫자 < 41){
        배경색 = 'blue'
    }
    else {
        배경색 = 'green'
    }
    공.style.background= 배경색
}

setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨[0],결과창)
}, 1000);
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨[1],결과창)
}, 2000);
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨[2],결과창)
}, 3000);
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨[3],결과창)
}, 4000);
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨[4],결과창)
}, 5000);
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨[5],결과창)
}, 6000);

setTimeout(function 비동기콜백함수() {
    var 칸 = document.getElementsByClassName('보너스')[0]  
    공색칠하기(보너스,칸)
}, 7000);