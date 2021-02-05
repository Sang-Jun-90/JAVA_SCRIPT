var 바디 = document.body

var list = []
for ( var i = 1 ; i<=45 ; i++){
    list.push(i)
}
var ext = []
for (var k = 0 ; k < 6 ; k++){
    var listNumber = list.splice(Math.floor(Math.random()*(list.length-k)),1)[0]
    ext.push(listNumber)
}
console.log(ext)

var 공 = document.getElementById('결과창')

for (var j=0 ; j < 6 ; j++){
    var 값 = ext[k]
    공.textContent(값)
}