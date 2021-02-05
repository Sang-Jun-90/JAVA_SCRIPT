var 바디 = document.body

var 숫자1 = Math.ceil(Math.random()*9)    // 생성되는 임의의값부터 정의한다.
var 숫자2 = Math.ceil(Math.random()*9)
console.log(숫자1,숫자2)

var 제목 = document.createElement('h1')
바디.append(제목)
제목.textContent = '[구구단]'

var 문제 = document.createElement('div')
바디.append(문제)
문제.textContent = 숫자1 + ' 곱하기' + 숫자2 + ' 는?'

var 폼 = document.createElement('form')
바디.append(폼)
var 입력창 = document.createElement('input')
폼.append(입력창)
입력창.id = 'input'
var 버튼 = document.createElement('button')
폼.append(버튼)
버튼.textContent = '버튼'
버튼.id = 'button'

var 결과 = document.createElement('div')
바디.append(결과)
결과.textContent = '정답은?'

폼.addEventListener('submit', function 비동기함수(이벤트){
    이벤트.preventDefault()
    if (Number(입력창.value) === 숫자1 * 숫자2){    // input으로 받은 값은 문자열이다.
        결과.textContent = '정답입니다.'
        숫자1 = Math.ceil(Math.random()*9)
        숫자2 = Math.ceil(Math.random()*9)
        문제.textContent = 숫자1 + ' 곱하기' + 숫자2 + ' 는?'
        입력창.value = ''
        입력창.focus()
    }
    else {
        결과.textContent = '땡'
        입력창.value = ''
        입력창.focus()
    }
})