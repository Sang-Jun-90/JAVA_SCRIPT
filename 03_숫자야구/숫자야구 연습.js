var 바디 = document.body

var 게임제목 = document.createElement('h1')
바디.append(게임제목)
게임제목.textContent = '[숫자야구]'

var 스볼 = document.createElement('div')
바디.append(스볼)

var 폼 = document.createElement('form'); // 폼을 써야 엔터했을때에 클릭처럼 처리
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);  // 입력창은 폼에 달려 있는 요소
입력창.type = 'tel'; // 입력창의 성격
입력창.maxLength= 4;  // 최대입력 수
입력창.placeholder = '정답을 입력해보세요'
var 버튼 = document.createElement('button');  //// 버튼은 폼에 달려 있는 요소
버튼.textContent = '입력';
폼.append(버튼);

var 결과창 = document.createElement('div')
바디.append(결과창)

////////////////////////////

function 숫자셔플(){
    숫자집합 = [1,2,3,4,5,6,7,8,9]
    셔플 = [];

    for (var i = 0 ; 4 > i ; i++) {
        var 숫자 = 숫자집합.splice(Math.floor(Math.random()*(9-i)),1)[0]  // splice 는 쪼개서 넣고 '배열'로 출력
        셔플.push(숫자)
    }
}

숫자셔플()
console.log(셔플)

틀린횟수 = 0  // 바깥쪽에 뽑아서 측정한다.

폼.addEventListener('submit', function 비동기함수(이벤트){
    이벤트.preventDefault();
    var 입력값 = 입력창.value
    var 조인셔플 = 셔플.join('') // 배열을 숫자로 변경한다.
    console.log('입력한 값은? ' + 입력값)
    console.log('정답은 ' + 셔플.join(''))
    if (입력값 === 조인셔플){     
        결과창.textContent = '정답입니다.'
        입력창.focus()
        입력창.value =''
        숫자셔플()
        console.log(셔플)
    }
    else {
        var 스트라이크 = 0
        var 볼 = 0
        틀린횟수 += 1
        if (틀린횟수 > 3){
            결과창.textContent = '열번 넘게 틀렷어요 답은' + 조인셔플 + '였습니다';
            입력창.value = '';
            입력창.focus();
            숫자셔플();  
            틀린횟수 = 0; 
            console.log(셔플)
        }
        else {
            for (var i = 0 ; i < 4 ; i += 1){
                if (입력값[i] === 조인셔플[i]){
                    스트라이크 += 1
                }
                else if (조인셔플.indexOf(입력값[i]) > -1){ // 인덱스로 유무를 파악한다.
                    볼 += 1
                }
        }
        }
        스볼.textContent = 볼 +'볼' + 스트라이크 +'스트라이크'
        입력창.focus()
        입력창.value =''
    }
})