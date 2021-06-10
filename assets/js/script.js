$(document).ready(function ()
{
    //creating row for each hour plan
  //  var $rowEl=$('div').addClass("row py-1");
    //create 3 coloumns to display time, text and save button


    generateHourBlock(9)

});
       

function generateHourBlock(iterations)
{
    if(!iterations)
    {
        iterations = 1;
    }

    var currentTime = GetCurrentHour("LT");

    for(var i = 0; i < iterations; i++)
    {
        text_Hour="9";
        text_Suffix="am"
        var text_time = text_Hour + text_Suffix;

        $iBlock = $("<div>").addClass("row py-1");
    
        $iTimeText = $("<h5>").addClass("text-center").text(text_time);
        $iTimeDiv = $("<div>").addClass("col-2 py-3 bg-warning align-middle").append($iTimeText);

        $iTextDiv = $("<textarea>").addClass("col-8 py-3 overflow-auto").text("").attr("id", text_time);
      //  setBGColor($iTextDiv, currentTime, text_time);
    
        $iLockIcon = $("<span>").addClass("lock");

        $iLockDiv = $("<div>").addClass("col-1 py-3 lock-container border border-primary").append($iLockIcon);
        
        $iLockIcon.toggleClass('unlocked');
    aa
        $iBlock.append($iTimeDiv, $iTextDiv, $iLockDiv);
    
        $("#planner").append($iBlock);
    
      //  incrementTextHour();
    }

}