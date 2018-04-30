function slickSlider() {
    $('.calendarSlider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
}

function onClickBox() {
    $('.dayBox').click(function (e) {

        var day = $(this).find(".dayNumber").text();

        if (day !== "1" && day !== "2" && day !== "3") {
            $(".sliderLightbox").show();
        }
        else {
            console.log("next month");
        }

        switch (day) {
            case "8":
                $('.calendarSlider').slick('slickGoTo', 0);
                break;
            case "9":
                $('.calendarSlider').slick('slickGoTo', 1);
                break;
            case "10":
                $('.calendarSlider').slick('slickGoTo', 2);
                break;
            case "11":
                $('.calendarSlider').slick('slickGoTo', 3);
                break;
            case "12":
                $('.calendarSlider').slick('slickGoTo', 4);
                break;
            case "15":
                $('.calendarSlider').slick('slickGoTo', 5);
                break;
            case "16":
                $('.calendarSlider').slick('slickGoTo', 6);
                break;
            case "17":
                $('.calendarSlider').slick('slickGoTo', 7);
                break;
            case "18":
                $('.calendarSlider').slick('slickGoTo', 8);
                break;
            case "19":
                $('.calendarSlider').slick('slickGoTo', 9);
                break;
            case "22":
                $('.calendarSlider').slick('slickGoTo', 10);
                break;
            case "23":
                $('.calendarSlider').slick('slickGoTo', 11);
                break;
            case "24":
                $('.calendarSlider').slick('slickGoTo', 12);
                break;
            case "25":
                $('.calendarSlider').slick('slickGoTo', 13);
                break;
            case "26":
                $('.calendarSlider').slick('slickGoTo', 14);
                break;
            case "29":
                $('.calendarSlider').slick('slickGoTo', 15);
                console.log("15");
                break;
            case "30":
                $('.calendarSlider').slick('slickGoTo', 16);
                console.log("16");
                break;
            case "1":
                console.log(day);
                break;
            case "2":
                console.log(day);
                break;
            case "3":
                console.log(day);
                break;
            default:
                $('.calendarSlider').slick('slickGoTo', 0);
        }
    });
}

function closeSlider() {
    $('.closeSlider').click(function (e) {
        $(".sliderLightbox").hide();
    });
}


$(function () { // document ready shortcut
    slickSlider();
    onClickBox();
    closeSlider();
});

