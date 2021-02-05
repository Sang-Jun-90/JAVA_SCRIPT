var table = document.getElementById('table')
var tbody = document.getElementById('tbody')
var result = document.getElementById('result')

var 줄모음 = [];
var 가로세로 = [];

var 턴 = "X"

var 몇줄;
var 몇칸;

///////////////////////////////////////////////
function 승리이후(){
    result.textContent = 턴 + "이 승리하였습니다."
    setTimeout(() => {
        result.textContent = ""
        가로세로.forEach(function(줄){
            줄.forEach(function(칸){
                칸.textContent = ""
            })
        })
    }, 2000);
    
    턴 = "O"

}
//////////////////////////////////////////////////
function 승부확인하기(몇줄, 몇칸){
    var draw = [];
    가로세로.forEach(function(줄){
        줄.forEach(function(칸){
            draw.push(칸)
        })
    })
    draw = draw.filter(function(칸){ return !칸.textContent})

    // 세로검사
    if (가로세로[0][몇칸].textContent === 턴 &&   
        가로세로[1][몇칸].textContent === 턴 &&
        가로세로[2][몇칸].textContent === 턴
        ){
            승리이후()
    }
    // 가로검사
    if (가로세로[몇줄][0].textContent === 턴 &&   
        가로세로[몇줄][1].textContent === 턴 &&
        가로세로[몇줄][2].textContent === 턴
        ){
            승리이후()
    }
    // 대각선 검사
    if (가로세로[0][0].textContent === 턴 &&   
        가로세로[1][1].textContent === 턴 &&
        가로세로[2][2].textContent === 턴
        ){
            승리이후()
    }
    if (가로세로[0][2].textContent === 턴 &&   
        가로세로[1][1].textContent === 턴 &&
        가로세로[2][0].textContent === 턴
        ){
            승리이후()
    }
    if (undefined)
    {
        result.textContent = "비겼습니다."
        setTimeout(() => {
            result.textContent = ""
            가로세로.forEach(function(줄){
                줄.forEach(function(칸){
                    칸.textContent = ""
                })
            })
        }, 2000);
        
        턴 = "O"
    }
}
//////////////////////////////////////////////////
function 턴바꾸기(){
    if (턴 === "X") { 
        턴 = "O"
    }
    else if (턴 === "O"){
        턴 = "X"
    }
}
//////////////////////////////////////////////////

// 박스 만들기
for (i = 0 ; i < 3 ; i++){
    var 줄 = document.createElement('tr')
    tbody.append(줄)
    var arr = []
    가로세로.push(arr)
    줄모음.push(줄)
    for (j = 0 ; j < 3 ; j++){
        var 칸 = document.createElement('td')
        줄.append(칸)
        가로세로[i].push(칸)

        // 클릭이벤트
        칸.addEventListener('click', function(e){
            if(턴 === 'O'){
                return
            }
            e.preventDefault();
            몇줄 = 줄모음.indexOf(e.currentTarget.parentNode);
            몇칸 = 가로세로[몇줄].indexOf(e.currentTarget);
            if (e.currentTarget.textContent != ''){
                alert("이미 돌이 있어요.")
                턴바꾸기()
            }
            else{
                e.currentTarget.textContent = 턴
                승부확인하기(몇줄,몇칸)
            }
            턴바꾸기()
 
            var 후보칸 = [];
            가로세로.forEach(function(줄){
                줄.forEach(function(칸){
                    후보칸.push(칸)
                })
            })
            후보칸 = 후보칸.filter(function(칸){ return !칸.textContent})
            if (후보칸.length === 0){
                result.textContent = '비겼어요.'
                setTimeout(() => {
                    result.textContent = ""
                    가로세로.forEach(function(줄){
                        줄.forEach(function(칸){
                            칸.textContent = ""
                        })
                    })
                }, 2000);
                
                턴 = "X         "
            }
            setTimeout(function(){
                if(턴 === 'X'){
                    return
                }
                if (result.textContent){
                    return
                }
                else{
                    console.log("computer")
                    

                    var choice = 후보칸[Math.floor(Math.random()* 후보칸.length)];
                    choice.textContent = 턴
                    var 몇줄 = 줄모음.indexOf(choice.parentNode);
                    var 몇칸 = 가로세로[몇줄].indexOf(choice);
                    승부확인하기(몇줄, 몇칸)
                }
                턴바꾸기()
      
            }, 1000);
           
            
        })
    }
}
