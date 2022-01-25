const presentDate = new Date();

function calendarInterface() {
  //THIS INDICATES THAT THE 1ST DAY OF JANUARY SHOULD BE ON A SATURDAY
  presentDate.setDate(1);
  console.log(presentDate.getDay());

  const monthDays = document.getElementById("days");

  //presentDate.setMonth(0);

  // LAST DAY OF CURRENT MONTH //
  const lastDay = new Date(presentDate.getFullYear(), presentDate.getMonth() + 1, 0).getDate();
  console.log("The last day of the month is:" + lastDay);

  const prevLastDayOfLastMonth = new Date(presentDate.getFullYear(), presentDate.getMonth(), 0).getDate();
  console.log(prevLastDayOfLastMonth);

  const firstDayIndex = presentDate.getDay();
  //previous dates of previous month

  const lastDayIndex = new Date(presentDate.getFullYear(), presentDate.getMonth() + 1, 0).getDay();
  console.log("The last day of the current month falls on a:" + lastDayIndex);

  const nextDaysOfNextMonth = 7 - lastDayIndex - 1;

  const months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  document.getElementById("monthOfTheYear").innerHTML = months[presentDate.getMonth()] + " " + presentDate.getFullYear();
  document.getElementById("date").innerHTML = new Date().toDateString();

  // CHANGING CALENDER WHEN AT THE BEGINNING OF A NEW YEAR AND END OF NEW YEAR
  const lastYear = new Date(presentDate.getFullYear(), presentDate.getMonth() - 1, 0).getFullYear();
  console.log("Last year:" + lastYear);
  const currentYear = new Date(presentDate.getFullYear(), presentDate.getMonth()).getFullYear();
  console.log("Current Year" + currentYear);
  const nextYear = new Date(presentDate.getFullYear(), presentDate.getMonth() + 13, 0).getFullYear();
  console.log("Next year:" + nextYear);

  let days = "";

  // ON EACH ITERATION, AS THE FIRST DAY OF THE MONTH FALLS ON WEEKDAY[INDEX], A NEW DIV IS CREATED WITH PREVIOUS DAYS OF LAST MONTH //
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date"> ${prevLastDayOfLastMonth - x + 1} </div>`;
  }

  // CURRENT MONTH //
  // ON EACH ITERATION, A NEW DIV IS CREATED WITH THE CONTENT OF THE NUMBER OF DAYS //
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && presentDate.getMonth() === new Date().getMonth()) {
      days += `<div class="present-day"> ${i} </div>`;
    } else {
      days += `<div> ${i} </div>`;
    }
  }

  // ON EACH ITERATION, A NEW DIV IS CREATED WITH THE CONTENT OF SEVERAL DAYS NEXT MONTH //
  for (let j = 1; j <= nextDaysOfNextMonth; j++) {
    days += `<div class="next-date"> ${j} </div>`;
  }
  monthDays.innerHTML = days;
}

//Previous month and next month are executed when arrows are clicked
document.getElementById("lastMonth").addEventListener("click", () => {
  presentDate.setMonth(presentDate.getMonth() - 1);
  calendarInterface();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  presentDate.setMonth(presentDate.getMonth() + 1);
  calendarInterface();
});
//Function Call
calendarInterface();
