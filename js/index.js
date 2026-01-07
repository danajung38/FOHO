/* index.js */


$(function () {
    //leftmove();

    //$('.main-image').click(leftmove);

    setInterval(leftmove, 6000);

});

/* ////////////////////
함수명: leftmove
기능: 슬라이드를 왼쪽으로 이동
///////////////////////*/

var page = 0;

function leftmove() {

    //슬라이드 한칸 크기 구하기
    var liw = $('.main-image').width();
    console.log('슬라이드 한칸 크기' + liw); //1006

    $('.gallery').animate({
        //marginLeft: '-=' + liw
        marginLeft: -liw
    }, 1000, function () {
        //다음을 위한 준비_콜백함수
        // 1) 첫번째 li(슬라이드)를 맨 뒤로 보내기! >>append()
        // 2) 슬라이드 순서 변경에 따라 ul의 위치 조절하기 >> margin

        $('.gallery li').first().appendTo('.gallery');
        $('.gallery').css('margin-left', 0);
    });

}