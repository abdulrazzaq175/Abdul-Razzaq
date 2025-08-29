let role=prompt("What is your position in this company(Admin,Manager,Employ or an Intern)")
let access=false;
 
if(role=="admin"||role=="Admin")
{
   access=true;  
}
else if(role=="Manager"||role=="manager")
{
  let experience=prompt("Enter number of years of your experience")
  if(experience>=2)
      access=true;  
}
else if(role=="Employ"||role=="employ")
{
   let experience=prompt("Enter number of years of your experience")
  let dept=prompt("What is your department ?")
  if(experience>3 && ((dept=="It" || dept=="it") || (dept=="Hr" || dept=="hr"))){
    access=true;}
}
else if(role=="intern"||role=="Intern")
{
  access=false;
}
  if (access) {
      console.log("Access Granted");
    } else {
      console.log("Access Denied");
    }