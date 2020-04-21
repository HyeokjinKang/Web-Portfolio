const phrases = ['그림들을 달라고 보채는 중..', '신뢰를 쌓는 중..', '엄청난 업적을 정리하는 중..', '페이지를 깨끗하게 닦는 중..', '도형을 오려내 붙이는 중..', '버그들 속에서 헤매는 중..', '자고있는 텍스트들을 깨우는 중..'];

if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("#mainContainer").css("font-size", window.innerWidth / 100 + "px");
} else {
    $("#hat").css("display", "none");
    $("#sdvx").css("height", "10vh");
    $("#sdvx").css("top", "283vh");
    $(".decoration").css("opacity", "0.3");
    $(".mobile_title").css("font-size", "2em");
    $(".mobile_detail").css("font-size", "1.2em");
    $(".mobile_bold").css("font-size", "1.4em");
    $(".t_decoration").css("display", "none");
    if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        setTimeout(() => {
            $(".pace").animate({
                opacity: 0
            }, 500);
            $("#wait").animate({
                opacity: 0
            }, 500);
            $("body").css("overflow-y", "auto");
            $(".pace").css("display", "none");
        }, 1000);
    }
}
$("#wait").text(phrases[Math.floor(Math.random() * 7)]);

Pace.on('done', () => {
    setTimeout(() => {
        $("#wait").animate({
            opacity: 0
        }, 500);
        $("body").css("overflow-y", "auto");
        $(".pace").css("display", "none");
    }, 500);
});