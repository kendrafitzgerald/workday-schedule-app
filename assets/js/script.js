$(function () {
  
  // These variables utilize dayJS to retrieve the current day and time.
    var currentDay = dayjs();
    var currentHour= dayjs().hour();

    //this variable targets the parent element of the entire page
    var containerEl = $(".container-lg");
  
  // This line of code accesses the header, with an ID of current day, and renders the current date on the 
    // page by attributing the text of the dayjs variable.
    $('#currentDay').text(currentDay.format('dddd, MMMM D'));

//This sets the item in local storage when the user clicks the save button on their 
//hour block. I targeted the container element so any save button within the parent
//element of the app will respond to the event target
      containerEl.on('click', '.saveBtn', function(event){

        var saveButton = $(event.target)
    
        var time = saveButton.parent().attr("id");
        var userInput =saveButton.prev().val();
  
    
      localStorage.setItem(time, userInput);
    
     });
  //This function targets each div with a class of time block and creates the variable of 
  //hour block based on the id of those divs. The conditional statements compares the id number
  //to the current hour and gives it a class of past (grey), future (green), or present (red).
  
      $(".time-block").each(function() {

        var hourBlock = parseInt($(this).attr("id"));
        console.log(typeof hourBlock)

        if (hourBlock < currentHour) {
          $(this).attr("class", "past");
        } else if (hourBlock > currentHour) {
          $(this).attr("class", "future");
        } else {
          $(this).attr("class", "present");
        }
      

      });

  
     //this for loop states that the user input will be retrieved from local storage and set
     //on the page in the text area, or second child of the div with the hour id
      for (var i = 9; i <= 17; i++) {
        $("#" + i ).children(1).val(localStorage.getItem(i));
        };
  
  });

