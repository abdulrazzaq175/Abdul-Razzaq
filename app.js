
let juicetype=prompt("Enter which type of juice you want(mango,orange,apple)");
let size=prompt("Enter the size of the juice glass(small,medium,large)");
let sugar=prompt("Do you want extra sugar or not?");
let TotalBill=0

if(juicetype=="mango")
{
 TotalBill +=100;   
}
else if(juicetype=="orange"){
 TotalBill +=150;       
}
else if(juicetype=="apple"){
 TotalBill +=120;       
}

if (size=="small") {
    TotalBill +=50
}
else if (size=="medium") {
    TotalBill +=100;
}
else if (size=="large") {
    TotalBill +=150
}

if (sugar=="extra sugar") {
    TotalBill +=20;
}
else
{
    TotalBill +=0;
}

console.log("Selected Juice Type : " +juicetype);
console.log("Size of the glass of juice: " +size);
console.log("Sugar Option : " +sugar);
console.log("TotalBill : " +TotalBill);
