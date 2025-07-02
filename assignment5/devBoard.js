 
    function eventHandle(numberid,navNumid,cardid,titleId){
        
       
        let num1= document.getElementById(numberid).innerText
            num1= parseInt(num1)
         let num2= document.getElementById(navNumid).innerText
            num2= parseInt( num2)

           let sum = num1-1 
            let sum2   =  num2+1
           
           console.log(sum)
           alert( "You successfully complete the task"
           )
        document.getElementById(numberid).innerText=sum
        document.getElementById(navNumid).innerText=sum2
       let button =document.getElementById(cardid);
         button.disabled= true;
         button.style.opacity="0.5"  

// this part is specifically for activities  where i added child and removed as well
         let con = document.getElementById('History')
            let title = document.getElementById(titleId).innerText 
         
        let paragraph = document.createElement("p")
        let time = new Date().toLocaleTimeString();
        paragraph.innerText = `CONGRATULATIONS you successfully complete the task ${title} at ${time} and you have remaining task of numbers is ${sum} and  your rewards number is ${sum2}.`;
        con.appendChild(paragraph)
       paragraph.style.backgroundColor='bg-[#F4F7FF] '
       paragraph.style.padding = "10px";
        paragraph.style.marginTop = "20px";


document.getElementById("clearHistory").addEventListener("click", function(event) {
    event.preventDefault();
    let con = document.getElementById('History');
   
        con.removeChild(paragraph);

      
    
    
});

              
     
        

         
}

document.getElementById("btn1").addEventListener("click",function(event){
    event.preventDefault();
     eventHandle("number1","navNum","btn1","jobSearch1")



     })



document.getElementById("btn2").addEventListener("click",function(event){
     eventHandle("number1","navNum","btn2","jobSearch2")
     })
document.getElementById("btn3").addEventListener("click",function(event){
     eventHandle("number1","navNum","btn3","jobSearch3")
     })
document.getElementById("btn4").addEventListener("click",function(event){
     eventHandle("number1","navNum","btn4","jobSearch4")
     })
document.getElementById("btn5").addEventListener("click",function(event){
     eventHandle("number1","navNum","btn5","jobSearch5")
     })
document.getElementById("btn6").addEventListener("click",function(event){
     eventHandle("number1","navNum","btn6","jobSearch6")
     
     alert('you successfully completed all the task')
     })  
     
     
// this is reserved for the button which can change color
//unfortunately the color is not working  after using tailwind css color doesn't work

document.getElementById("colorChangeBtn").addEventListener("click", function () {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});




// for new html page 2
  document.getElementById("discoverBtn").addEventListener("click", function () { 
   window.location.href='html2.html'

  })
  

  const now = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

  const dayName = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const fullDate = dayName
  const month2 = `${month} ${date}, ${year}`;

  document.getElementById("dateDisplay").innerText = fullDate;

  document.getElementById("dateDisplay2").innerText =month2;

 