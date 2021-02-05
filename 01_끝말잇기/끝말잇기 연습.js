var 바디 = document.body

var 게임제목 = document.createElement('h1') // 구역 설정하기 Createelement
바디.append(게임제목)  // 바디에 게임제목을 거는 거입니다.
게임제목.textContent = '[끝말잇기 게임]'

var 단어 = document.createElement('div')
단어.textContent = '이상준'
바디.append(단어)
단어.id = 'textc'  // id 설정하기

var 폼 = document.createElement('form')
바디.append(폼)
var 입력창 = document.createElement('input')
폼.append(입력창)
입력창.id = 'in-put'
var 버튼 = document.createElement('button')
폼.append(버튼)
버튼.textContent = '버튼'
버튼.id = 'button'


var 결과창 = document.createElement('div')
바디.append(결과창)
결과창.textContent = '다음단어는?'
결과창.id = 'result'

폼.addEventListener('submit', function 비동기함수(이벤트){   // addeventlistener 는 비동기함수, 콜백함수 입니다.
    이벤트.preventDefault()
    if (단어.textContent [단어.textContent .length-1] === 입력창.value[0]) {    // input 결과값은 .value
        단어.textContent  = 입력창.value
        결과창.textContent = '딩동댕'
        입력창.value = ''  // .value 값을 초기화한다.
        입력창.focus()  // .Focus() >> 입력창에 커서를 둔다.
    }
    else {
        입력창.value = ''
        입력창.focus()
        결과창.textContent = '땡'
    }
})
