function generateLayout()
{
    for(var i = 0; i < 9; i++)
    {
        //row for each hour
        $rowEl=$("<div>").addClass("row py-1");
        //Display Business hour in h4 and align in center
        $timeEl=$("<h4>").addClass("text-center").text("9am");
        //creates space for planning text
        $planEl=$("<div>").addClass("col-2 py-3 bg-warning align-middle");
        $planEl.append($timeEl);
        //create textarea to write plan
        $plantextEl=$("<textarea>").addClass("col-8 py-3 overflow-auto");
        $rowEl.append(planEl,plantextEl,"ji")
        $(".container").append($rowEl);

        /*var text_time = text_Hour + text_Suffix;

        $iBlock = $("<div>").addClass("row py-1");    
        $iTimeText = $("<h5>").addClass("text-center").text(text_time);
        $iTimeDiv = $("<div>").addClass("col-2 py-3 bg-warning align-middle").append($iTimeText);




        $iTextDiv = $("<textarea>").addClass("col-8 py-3 overflow-auto").text("").attr("id", text_time);
        setBGColor($iTextDiv, currentTime, text_time);
    
        $iLockIcon = $("<span>").addClass("lock");

        $iLockDiv = $("<div>").addClass("col-1 py-3 lock-container border border-primary").append($iLockIcon);
        
        $iLockIcon.toggleClass('unlocked');
    
        $iBlock.append($iTimeDiv, $iTextDiv, $iLockDiv);
    
        $("#planner").append($iBlock);
    
        incrementTextHour();*/
    }
}
generateLayout();