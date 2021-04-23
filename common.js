$(function(){
  //console.log('this is jquery');
  /* first,first-child/ last,last-child 비교 예제 */
  // $('p:first-child').css('color','red');
  // $('p:first').css('color','blue');
  // $('p:last-child').css('color','pink');
  // $('p:last').css('color','teal')

  /* even, odd 예제 */
  // element의  index값으로 선택한다.
  // $('li:even').css('background','salmon');// 짝수 index값
  // $('li:odd').css('background','violet');// 홀수 index값
  // console.log($('li:even'));

  /* eq,gt,lt 예제 */
  // $('li:eq(2)').css('color','red');// 해당 index와 같은 위치의 요소를 선택 (index 0부터 시작)
  // $('li:gt(2)').css('background','blue');// greater than equall기준으로 index가 큰 요소들을 선택
  // $('li:lt(2)').css('background','crimson');// less than equall기준으로 index가 큰 작은들을 선택

  /* heading 태그 선택 예제 */
  // $(':header').css('color','red');

  // contains 문자열의 포함 유무로 요소선택
  // $('p:contains("사과")').css('background','red');
  // $('p:contains("배")').css('background','gold');
  // $('p:contains("포도")').css('background','purple');
  // $('p:contains("귤")').css('background','orange');
  // $('p:contains("수박")').css('color','red');
  //
  // $('a:contains("menu2")').css('color','red');
  // $('a:contains("menu4")').css('background','salmon');
  // $('a:contains("menu4")').css('transition','2s');
  // $('li:contains("menu1")').css('background','teal');
  // $('li:contains("menu1")').css('transition','1s');

  /* has 예제 */
  // $('li:has(strong)').css('color','red');
  // $('li:has(p)').css('background','yellow');
  // $('li:has(span)').css('color','purple');
  // // $('li:has(a) a').css('background','pink');
  // $('li > a').css('background','pink');

  $('li:parent').css('border','1px solid red');
});
