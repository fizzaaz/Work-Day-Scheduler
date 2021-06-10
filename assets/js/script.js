function generatePlanner(time, timeText) {
    //creating row for each hour plan
    var $rowEl = $('<div>').addClass("row py-1");
    //create 3 coloumns blocks to display time, text and save button
    var $col1El = $('<div>').addClass("col-2 py-3 bg-warning align-middle");//to display time
    var $timeEl = $('<h5>').addClass("text-center").text(time + timeText);
    $col1El.append($timeEl);
    var $col2El = $('<textarea>').addClass("col-8 py-3 overflow-auto border border-primary");//to write text
    var $col3El = $('<button>').addClass("col-1 py-3 btn btn-success btn-block");//save btn
    var $saveIconEl = $('<i>').addClass('fas fa-save')//save icon
    $col3El.append($saveIconEl);
    //append all three coloumns in a row
    $rowEl.append($col1El, $col2El, $col3El);
    var currentTime= 3;
    //present
    if(currentTime===time)
    {
        $col2El.css("background","red")
    }
    else if(currentTime>time)
    {
        $col2El.css("background","grey")    //past
    }
    else
    {
        $col2El.css("background","green")    //future    

   
    }
    $(".container").append($rowEl);

}

function currentTime()
{
    
}
$(document).ready(function () {
    //alert(new Date().getHours());
    //display current day on the top
    $('#currentDay').css("font-weight","bold").text(moment().format('dddd, MMMM Do, YYYY')); 
     // 'Friday, June 24, 2016 1:42 AM'
    var time = 0;
    for (var i = 9; i <= 17; i++) {//Business hrs 9am-5pm
        if (i < 12) {//when time is before 12 pm
            generatePlanner(i, ":00 AM")//morning
        }
        else if (i === 12) {//when time is 12 pm change am to pm
            generatePlanner(i, ":00 PM")//noon
        }
        else {//when time has past 12 pm change am to pm and start with 1
            time++;
            generatePlanner(time, ":00 PM")//noon

        }
    }
});

