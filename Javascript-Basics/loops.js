// Loops:
// 1. For Loop
// 2. While Loop
// 3. Do While Loop
// 4. For-in Loop
// 5. For-of Loop
// console.log("no 1");
// console.log("no 2");
// console.log("no 3");
// console.log("no 4");
// console.log("no 5");
// console.log("no 6");

// FOR LOOP ----------------------------------
// let a;

// console.log("Even Numbers");
// for(a=1;a<=100;a++)
// if(a%2==0)

// console.log(a);
// console.log("Odd numbers");
// for(a=1;a<=100;a++)
// if (a%2!==0){
//     console.log(a);
// }

// console.log("Reverse");
// for(a=10;a>=1;a--)
// console.log(a);

// WHILE LOOP --------------------------------------
// let i = 15;
// while(i>=1){
// if (i%2!==0){
//     console.log("Odd Numbers  "+i);
// }
// i--;
// }

// DO WHILE LOOP -----------------------------------

// let j=1;
// do{
//     console.log(j);
//     j++;
// }
// while(j<=10)

// FOR-IN ------------------------------------------
const person = {
    name: 'Anbu' ,
    age: 24

};
for(let key in person){
    console.log(key+" : "+person[key]);
    // console.log(key);

}

let colors=['red','blue','green'];
for(let index in colors){
    console.log(index+" - "+colors[index]);
    // console.log(colors);
}

// FOR-OF loop ------------------------------------- 

for(let color of colors){
    console.log(color);
}











