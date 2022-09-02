
var currentDate = moment().format('dddd') + " " + moment().format("DD MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var formEl;

var hour = moment().hours();
var userInput;
var hourSpan;



// pass to arguements

var interval = setInterval(function() {
    var momentNow = moment ();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
        + momentNow.format('dddd')
        .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);


//hour list and save to storage
function initPage() {
    
    var init6 = JSON.parse(localStorage.getItem("06:00 am"));
    sixam.val(init6);

    var init7 = JSON.parse(localStorage.getItem("07:00 am"));
    sevenam.val(init7);

    var init8 = JSON.parse(localStorage.getItem("08:00 am"));
    eightam.val(init8);

    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineam.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"));
    tenam.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 am"));
    elevenam.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelvepm.val(init12);

    var init13 = JSON.parse(localStorage.getItem("1:00 pm"));
    onepm.val(init13);

    var init14 = JSON.parse(localStorage.getItem("2:00 pm"));
    twopm.val(init14);

    var init15 = JSON.parse(localStorage.getItem("3:00 pm"));
    threepm.val(init15);

    var init16 = JSON.parse(localStorage.getItem("4:00 pm"));
    fourpm.val(init16);

    var init17 = JSON.parse(localStorage.getItem("5:00 pm"));
    twelvepm.val(init17);

    var init18 = JSON.parse(localStorage.getItem("6:00 pm"));
    fivepm.val(init18);

    var init19 = JSON.parse(localStorage.getItem("7:00 pm"));
    sixpm.val(init19);

}

formEl.addEventListener("click", createTaskHandeler);
