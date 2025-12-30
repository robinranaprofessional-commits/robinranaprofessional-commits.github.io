/**
 * Robin Rana
 * T00743614
 * COMP2681 Assignment 5
 * 
 * the following Javascript code demonstrates the time remaining
 * until my birthday and display message.
 */
const birthday = new Date("2026-09-09");//date set to next year's birthday

function calculateDaysRemaining()
{
    const today = new Date();
    const diffTime = birthday-today;
    const diffDays = Math.ceil(diffTime/(1000*60*60*24));

    const message = document.getElementById("countdownMessage");

    message.innerHTML = "Days remaining Until my birthday: " + diffDays;

    //color coding with respect to time
    if(diffDays<30)
    {
        message.style.color = "red";
    }
    else if(diffDays >= 60 && diffDays <= 180)
    {
        message.style.color = "green";
    }
    else
    {
        message.style.color = "blue";
    }
}

calculateDaysRemaining();
