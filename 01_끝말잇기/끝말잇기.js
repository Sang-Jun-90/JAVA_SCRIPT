var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '상준';
document.body.append(단어);
var 폼 = document.createElement('form');
document.body.append(폼)
var 입력창 = document.createElement('input')
폼.append(입력창);
var 버튼 = document.createElement('button')
버튼.textContent = '입력'
폼.append(버튼);
var 결과창 = document.createElement('div')
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수 (이벤트) {
    이벤트.preventDefault();
    if (단어.textContent[단어.textContent.length-1] === 입력창.value[0]){
    결과창.textContent = '딩동댕';
    단어.textContent = 입력창.value;
    입력창.value = '';
    입력창.focus();
}
    else {
    결과창.textContent = '땡';
    입력창.value = '';
    입력창.focus();
}}
);

//word = '상준'
//while (true) {
//newword = prompt(word)
//if (word[word.length-1] === newword[0]) {
// alert('코렉토')
// word = newword}
//else {
// alert('틀렸토')
//}
//}

//while (true) {
 //   var 숫자1 = Math.ceil(Math.random()*9);
  //  var 숫자2 = Math.ceil(Math.random()*9);
//var 결과 = 숫자1 * 숫자2;
  //  var 조건 = true;
//while (조건) { 
  //  var 답= prompt ( 숫자1+ '곱하기' + 숫자2 + '는?')
//if (결과 === Number(답)){
   //  alert('딩동댕');
  //   조건 = false;
 //   }
 //   else{
  //   alert('땡')
 //   }
//}
 //   }
    