var 바디 = document.body
var 제목 = document.createElement('h1')
바디.append(제목)
제목.textContent = "<틱택토 게임>"

var 테이블 = document.createElement('table')
바디.append(테이블)

var 티바디 = document.createElement('tbody')
테이블.append(티바디)

var 결과창 = document.createElement('div')
바디.append(결과창)
결과창.textContent = '결과창'
결과창.id = 'result'

var 가로줄 = []
var 세로줄 = []

var 턴 = 'X'
var 다참 = false
var 비동기콜백 = function(이벤트){
    var 몇줄 = 가로줄.indexOf(이벤트.target.parentNode)

    var 몇칸 = 세로줄[몇줄].indexOf(이벤트.target)

    
    if (세로줄[몇줄][몇칸].textContent !== ''){
        
    }
    else {
   
        세로줄[몇줄][몇칸].textContent = 턴
        if (세로줄[0][몇칸].textContent === 턴 && 
            세로줄[1][몇칸].textContent === 턴 &&
            세로줄[2][몇칸].textContent === 턴 ){  // 세로검사
            다참 = true;
            결과창.textContent = 턴+' 님이 승리'
        }
        if (세로줄[몇줄][0].textContent === 턴 && 
            세로줄[몇줄][1].textContent === 턴 &&
            세로줄[몇줄][2].textContent === 턴 ){  // 가로검사
            다참 = true;
            결과창.textContent = 턴+' 님이 승리'
        }
        if (세로줄[0][0].textContent === 턴 && 
            세로줄[1][1].textContent === 턴 &&
            세로줄[2][2].textContent === 턴 ){  // 대각선검사1
            다참 = true;
            결과창.textContent = 턴+' 님이 승리'
        }
        if (세로줄[0][2].textContent === 턴 && 
            세로줄[1][1].textContent === 턴 &&
            세로줄[2][0].textContent === 턴 ){  // 대각선검사2
            다참 = true;
            결과창.textContent = 턴+' 님이 승리'
        }
        console.log(가로줄)
        console.log(세로줄)
        if (다참){
            세로줄.forEach(function(가로) {
                가로줄.forEach(function(세로){
                    세로.textContent = ''
                })
            })
            턴 = 'X'
        }

        if (턴 === 'X'){
                턴 = 'O'
        }
        else {
            턴 = 'X'
        }

    }

}

function 표만들기(){
    for(var i = 0 ; i < 3; i +=1){
    var 세로 = document.createElement('tr')
    티바디.append(세로)
    가로줄.push(세로)
    세로줄.push([])
    for (var j = 0 ; j < 3; j +=1){
        var 가로 = document.createElement('td')
        가로.addEventListener('click', 비동기콜백)
        세로.append(가로)
        세로줄[i].push(가로)
    }
}
}
표만들기()




////////////////////////////////


