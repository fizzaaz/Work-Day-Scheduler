$(document).ready(function ()
{
    //creating row for each hour plan
     var $rowEl=$('div').addClass("row py-1");
    //create 3 coloumns blocks to display time, text and save button
    var $colEl=$('div').addClass("col-2 py-3 bg-warning align-middle");//to display time
    var $timeEl=$('h5').text("9:am");
    $colEl.append($timeEl);
    var $colE2=$('div').addClass("col-8 py-3 overflow-auto");//to display textarea
   var $textAreaEl=$('textarea').text("hello");
    $colE2.append($textAreaEl);
    var $colE3=$('div').addClass("col-1 py-3 border border-primary");//to display save
    var $saveBtnEl=$('i').addClass("bi bi-saveBtn");
    $colE3.append($saveBtnEl);
    $rowEl.append($colEl,$colE2,$colE3);
    $('.container').append($rowEl);




   

});
      
