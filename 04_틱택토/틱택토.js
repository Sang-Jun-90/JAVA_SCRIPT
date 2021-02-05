var 바디 = document.body;
var 테이블= document.createElement('table');
바디.append(테이블);
var 결과= document.createElement('div');
바디.append(결과);

var 칸들 = []
var 줄들 = []
var 턴 = 'X'

칸들.forEach(function(줄) {
    줄.forEach(function(칸){
        칸.textContent = ''
    })
})

var 비동기콜백 = function(이벤트) {
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log('몇줄', 몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log('몇칸', 몇칸);

    if (칸들[몇줄][몇칸].textContent !== '') {
        console.log('빈칸이 아닙니다')
    }
    else {
        console.log('빈칸입니다') 
        칸들[몇줄][몇칸].textContent = 턴;
        var 다참 = false;
        if (        // 가로줄 검사
            칸들[몇줄][0].textContent === 턴 &&
            칸들[몇줄][1].textContent === 턴 &&
            칸들[몇줄][2].textContent === 턴 
        ) 
        {
            다참 = true
        }
        if (        // 세로줄 검사
            칸들[0][몇칸].textContent === 턴 &&
            칸들[1][몇칸].textContent === 턴 &&
            칸들[2][몇칸].textContent === 턴 
        ) 
        {
            다참 = true
        }
        if (       // 대각선검사
            몇칸 - 몇줄 === 0
        ) 
        {
            if (
                칸들[0][0].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[2][2].textContent === 턴
            )
            {
                다참 = true
            }
        }
        if (       // 대각선검사
            몇칸 + 몇줄 === 2
        ) 
        {
            if (
                칸들[0][2].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[2][0].textContent === 턴
            )
            {
                다참 = true
            }
        }
        if (다참) {
            console.log(턴+'님이 승리하셨습니다.')
            결과.textContent = 턴+'님이 승리하셨습니다.'
            턴 = 'X';
        }
        else {
            if (턴 ==='X') {
            턴 = 'O'
            }
            else {
            턴 = 'X'    
            }
        }
    }
}

for ( i=1 ; i<4 ; i+=1 ) {
    var 줄 = document.createElement('tr')
    테이블.append(줄)
    줄들.push(줄)
    칸들.push([])
    for ( j=1 ; j<4 ; j+=1 ){
        var 칸 = document.createElement('td') ;
        칸.addEventListener('click', 비동기콜백);
        칸들[i-1].push(칸);
        줄.append(칸);
    }   
}
console.log(칸들,줄들)

