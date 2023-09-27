let marks =80;
switch(true){
    case marks >= 90:
    console.log("Super Grade");
    break;
    
    case marks > 50:
    console.log("Pass");
    break;

    case marks < 50:
    console.log("Fail");
    break;

    default:
    console.log("Unknown");
}

// Assignment

let savings = 100;
switch(true){
    case savings > 60000:
    console.log("Buy Iphone Mobile");
    break;
    case savings > 10000:
    console.log("Buy Android Mobile");
    break;
    case savings < 10000:
    console.log("You can't afford mobile");
    break;
    default:
        console.log("--");

}