var 스크린 = document.querySelector('#screen');


// var 시작시간 = new Date(); // var 시작시간 = performance now(); // console.time(변수)

var 시작시간;
var 끝시간;
var timeout;
var 기록 = []

스크린.addEventListener('click', function(){
    if (스크린.classList.contains('waiting')){
        스크린.classList.remove('waiting')
        스크린.classList.add('ready')
        스크린.textContent =  '초록색이되면 클릭하세요.'
        timeout = setTimeout(function(){
            시작시간 = new Date();
            스크린.click()
        }, Math.floor(Math.random()*1000)+2000);
    }
    else if (스크린.classList.contains('ready')){
        if(!시작시간){
            clearTimeout(timeout);
            스크린.classList.remove('ready')
            스크린.classList.add('waiting')
            스크린.textContent =  '너무빨라요. 다시 클릭하세요.'
        }
        else {
            스크린.classList.remove('ready')
            스크린.classList.add('now')
            스크린.textContent =  'CLICK'
        }
        
    }
    else if (스크린.classList.contains('now')){
        끝시간 = new Date();
        기록.push(끝시간 - 시작시간)
        시작시간 = null;
        끝시간 = null;
        스크린.classList.remove('now')
        스크린.classList.add('waiting')
        스크린.textContent =  '클릭해서 시작하세요.'
    }


})