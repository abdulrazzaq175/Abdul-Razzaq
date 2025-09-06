let name=prompt("Enter your name")
document.write("<b>Welcom ", name,"<br><br><b>");
let t=prompt("Enter any number for which table is required")
document.write("The table of "+t +" is written below:<br><br>") ;

for(let i=0;i<21;i++)
{
     document.write(t + " x " + i + " = " + (t * i),"<br>");   
}