var 이미지좌표 = '0';
var 가위바위보 = {
    가위 : '0',
    바위 : '-100px',
    보 : '-200px',
}

function 컴퓨터의선택(이미지좌표){
    return Object.entries(가위바위보).find(function(v){
        console.log(v);
        return v[1] === 이미지좌표;
    })[0]
}

var 인터벌 = setInterval(() => {
    if (이미지좌표 === 가위바위보.가위){
        이미지좌표 = 가위바위보.바위;
    }
    else if (이미지좌표 ===가위바위보.바위){
        이미지좌표 = 가위바위보.보;
    }
    else{ 
        이미지좌표 = 가위바위보.가위;
    }   
    document.querySelector("#computer").style.background = 'url(./가위바위보.png)' + 이미지좌표 + ' 0' 
}, 100);

// document.querySelectorALL('.btn').forEach(function() {
//  btn.addEventListener('click',function() {
//     console.log(this.textContent);
//     });
// });


document.querySelector('#scissor').addEventListener('click',function() {
    clearInterval(인터벌);
    setTimeout(function(){
        var 인터벌 = setInterval(() => {
            if (이미지좌표 === 가위바위보.가위){
                이미지좌표 = 가위바위보.바위;
            }
            else if (이미지좌표 ===가위바위보.바위){
                이미지좌표 = 가위바위보.보;
            }
            else{ 
                이미지좌표 = 가위바위보.가위;
            }   
            document.querySelector("#computer").style.background = 'url(./가위바위보.png)' + 이미지좌표 + ' 0' 
        }, 100);
    } , 1000)
    var 나의선택 = this.textContent;
    if (나의선택 === '가위') {
        if (컴퓨터의선택(이미지좌표) === '가위'){
            console.log('비겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '바위'){
            console.log('졌습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '보'){
            console.log('이겼습니다.')
        }
    }
    else if (나의선택 === '바위'){
        if (컴퓨터의선택(이미지좌표) === '가위'){
            console.log('이겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '바위'){
            console.log('비겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '보'){
            console.log('졌습니다.')
        }
    }
    else if (나의선택 === '보'){
        if (컴퓨터의선택(이미지좌표) === '가위'){
            console.log('졌습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '바위'){
            console.log('이겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '보'){
            console.log('비겼습니다.')
        }        
    }
});
document.querySelector('#rock').addEventListener('click',function() {
    clearInterval(인터벌);
    setTimeout(function(){
       var 인터벌 = setInterval(() => {
            if (이미지좌표 === 가위바위보.가위){
                이미지좌표 = 가위바위보.바위;
            }
            else if (이미지좌표 ===가위바위보.바위){
                이미지좌표 = 가위바위보.보;
            }
            else{ 
                이미지좌표 = 가위바위보.가위;
            }   
            document.querySelector("#computer").style.background = 'url(./가위바위보.png)' + 이미지좌표 + ' 0' 
        }, 100);
    } , 1000)
    var 나의선택 = this.textContent;
    if (나의선택 === '가위') {
        if (컴퓨터의선택(이미지좌표) === '가위'){
            console.log('비겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '바위'){
            console.log('졌습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '보'){
            console.log('이겼습니다.')
        }
    }
    else if (나의선택 === '바위'){
        if (컴퓨터의선택(이미지좌표) === '가위'){
            console.log('이겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '바위'){
            console.log('비겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '보'){
            console.log('졌습니다.')
        }
    }
    else if (나의선택 === '보'){
        if (컴퓨터의선택(이미지좌표) === '가위'){
            console.log('졌습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '바위'){
            console.log('이겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '보'){
            console.log('비겼습니다.')
        }        
    }
});
document.querySelector('#paper').addEventListener('click',function() {
    clearInterval(인터벌);
    setTimeout(function(){
        var 인터벌 = setInterval(() => {
            if (이미지좌표 === 가위바위보.가위){
                이미지좌표 = 가위바위보.바위;
            }
            else if (이미지좌표 ===가위바위보.바위){
                이미지좌표 = 가위바위보.보;
            }
            else{ 
                이미지좌표 = 가위바위보.가위;
            }   
            document.querySelector("#computer").style.background = 'url(./가위바위보.png)' + 이미지좌표 + ' 0' 
        }, 100);
    } , 1000)
    var 나의선택 = this.textContent;
    if (나의선택 === '가위') {
        if (컴퓨터의선택(이미지좌표) === '가위'){
            console.log('비겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '바위'){
            console.log('졌습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '보'){
            console.log('이겼습니다.')
        }
    }
    else if (나의선택 === '바위'){
        if (컴퓨터의선택(이미지좌표) === '가위'){
            console.log('이겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '바위'){
            console.log('비겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '보'){
            console.log('졌습니다.')
        }
    }
    else if (나의선택 === '보'){
        if (컴퓨터의선택(이미지좌표) === '가위'){
            console.log('졌습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '바위'){
            console.log('이겼습니다.')
        }
        else if (컴퓨터의선택(이미지좌표) === '보'){
            console.log('비겼습니다.')
        }        
    }
});
