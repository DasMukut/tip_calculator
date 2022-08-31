let calculate=document.getElementById("calculate");

calculate.addEventListener("click",()=>{
    let totalbill=document.getElementById("totalbill").value;
    let percent=document.getElementById("percent").value;
    let person=document.getElementById("split").value;

    if(totalbill==""){
        alert("Please enter the bill amount");
        return
     }
      
     if(percent==0){
        alert("Please enter tip percentage ");
        return
     }
     if(person==0){
        alert("Enter how many person are there ");
        return
     }


    let total=(totalbill*percent)/person;
    total=total.toFixed(2);
    // console.log(totalbill)
    // console.log(percent)
    // console.log(person)
    // console.log(total)
    document.getElementById("tip").innerHTML=total;

})