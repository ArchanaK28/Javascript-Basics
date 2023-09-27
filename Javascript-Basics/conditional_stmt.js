// Conditional Statements
// let isRainy=false;
// let isCloudy=false;

// if(isRainy || isCloudy) 
// {
//     console.log("Please keep your Umbrella with you");
//     console.log("Enjoy the Rain Makkale!");
// }
// else{
//     console.log("Sky is clear, so no rain today");
// }

// Example - 1

// let hrs = new Date();
// let hour = hrs.getHours();
let hour = new Date().getHours();
// let hour = 19;

if(hour >= 0 && hour <13)
{
    console.log("Good Morning");
}
else if(hour >= 13 && hour <=17 ){
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}

// // Example - 2
// let hour = new Date();
// console.log(hour);
// console.log(hour.getHours);


