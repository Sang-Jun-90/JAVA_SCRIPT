
var 바디 = document.body; 
// 화면에 접근 코드
var 숫자후보;
var 숫자배열;

function 숫자뽑기(){
    숫자후보 = [1,2,3,4,5,6,7,8,9];
    숫자배열 = [];

for (var i = 0; i<4 ; i+= 1) {
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*(9-i)),1)[0];
    숫자배열.push(뽑은것);
}
}

숫자뽑기();

console.log(숫자배열)

var 결과 = document.createElement('h1');
document.body.append(결과);

var 폼 = document.createElement('form'); // 폼을 써야 엔터했을때에 클릭처럼 처리
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);  // 입력창은 폼에 달려 있는 요소
입력창.type = 'tel'; // 입력창의 성격
입력창.maxLength= 4;  // 최대입력 수
var 버튼 = document.createElement('button');  //// 버튼은 폼에 달려 있는 요소
버튼.textContent = '입력';
폼.append(버튼);

틀린횟수 = 0;

폼.addEventListener('submit', function 콜백함수(이벤트) { // 엔터를 쳤을때 실행하는 함수 = 콜백함수
    이벤트.preventDefault();
    var 답 = 입력창.value;
    console.log("입력한 값은"+답);
    console.log("정답은"+숫자배열.join(''));  // .join('') >> 배열을 연속된 수로 변경
    if( 답 === 숫자배열.join('')) {
        결과.textContent = '홈런';
        입력창.value = '';
        입력창.focus();
        숫자뽑기();
        틀린횟수 = 0;
    }
    
    else{   
        var 답배열 = 답;  // 입력한 답을 스플릿해서 쪼갠다
        var 스트라이크= 0;   // 처음기본값은 0으로 설정
        var 볼= 0; // 처음기본값은 0으로 설정
        틀린횟수 += 1;   // 여기부터는 거칠때마다 1추가
        if (틀린횟수 > 3){
            결과.textContent = '열번 넘게 틀렷어요 답은' + 숫자배열.join('') + '였습니다';
            입력창.value = '';
            입력창.focus();
            숫자뽑기();  
        틀린횟수 = 0;   // 초기화
        }
        else {    // 추가기회 및 힌트 제공
            for (var i = 0; i<4 ; i+= 1) {
                if (Number(답배열[i]) === 숫자배열[i]) {
                    스트라이크 += 1
                }
                else if(숫자배열.indexOf(Number(답배열[i])) > -1){
                    볼 += 1
                }
            }
            결과.textContent = 스트라이크 + "스트라이크" + 볼 + '볼' + '입니다';   
            입력창.value = '';
            입력창.focus(); 
        }
    }

});