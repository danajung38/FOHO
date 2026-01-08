/* index.js */


$(function () {
    //leftmove();

    //$('.main-image').click(leftmove);

    setInterval(leftmove, 6000);

    var benefitSrc = '';

    $('.reflet_benefits a').click(function (evt) {

        evt.preventDefault();

        //var benefitSrc = $(this).attr('href');
        benefitSrc = $(this).attr('href');
        console.log(benefitSrc);

        //모달창('.popup) 등장, 이미지 박스('.benefit') 등장
        $('.popup').show();
        //$('.benefit').hide();
        $(benefitSrc).show();

    });

    //모달창 닫기
    $('.popup').click(function () {
        //$(this).hide().children().find(benefitSrc).hide();
        //$(this).hide().find(benefitSrc).hide();
        $(this).hide().children().hide();
    });

    setInterval(slidemove, 3000);

    //slidemove();

    // 2~4초 마다 깜빡임 반복
    setInterval(blink, 2000 + Math.random() * 2000);
});


/* ////////////////////
함수명: leftmove
기능: 슬라이드를 왼쪽으로 이동
///////////////////////*/

var page = 0;

function leftmove() {

    //슬라이드 한칸 크기 구하기
    var liw = $('.main-image').width();
    //console.log('슬라이드 한칸 크기' + liw); //1006

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

/* ////////////////////
함수명: slidemove
기능: card 슬라이드를 왼쪽으로 이동
///////////////////////*/

function slidemove() {

    //슬라이드 한칸 크기 구하기 
    var cardwi = $('.card').outerWidth(true);
    console.log('box한칸 크기: ' + cardwi); //373

    $('.cards_box').animate({
        //marginLeft: -(cardwi + 9)
        marginLeft: -cardwi
    }, 1000, function () {

        $('.card').first().appendTo('.cards_box');
        $('.cards_box').css('margin-left', 0);
    });

}

function blink() {
    $('.eyeani .eyes').hide();
    $('.eyeani .lid').show();
    setTimeout(function () {
        $('.eyeani .lid').hide();
        $('.eyeani .eyes').show();
    }, 120); // 실제 깜빡임 지속시간(ms)
}


