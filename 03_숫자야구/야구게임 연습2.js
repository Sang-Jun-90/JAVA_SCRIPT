var list = [1,2,3,4,5,6,7,8,9]
var fourNumbersList = []

for (var i = 0 ; i < 4 ; i++){
var ext = list.splice(Math.floor(Math.random()*list.length),1)[0]
fourNumbersList.push(ext)
}

var fourNumbers = fourNumbersList.join('')
var strike = 0
var ball = 0 
var tries = 0

console.log('답 ' + fourNumbers)

while ( strike < 3) {
    var answer = prompt('숫자를 입력하세요')
    console.log('입력값은 ' + answer)
    strike = 0
    ball = 0 
    tries++
    for (var j = 0 ; j < 4 ; j++){
        for (var k = 0 ; k < 4 ; k++){
            if (fourNumbers[j] === answer[k]){
                if (j === k){
                    strike++
                    console.log('스트라이크 '+ strike)
                }
                else {
                    ball++
                    console.log('볼 ' + ball)
                }
            }
        }
    }
    console.log('볼 ' + ball + '스트라이크 '+ strike)
    if (strike === 4) {
        console.log('정답입니다')
    }
    else if (tries < 3){
        console.log((3 - tries) + '번 남았습니다.')
    }
    else {
        console.log('실패')
        break;
    }
}