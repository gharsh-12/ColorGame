var colors=generatecolor(6);
var squares=document.querySelectorAll(".square")
var choosen=pickcolor();
var display=document.getElementById("discolor")
var messagedisplay=document.querySelector('#message')
var h1=document.querySelector('h1');
var button=document.querySelector('#newcolor');
var button1=document.querySelector('#type1');
var button2=document.querySelector('#type2');
var type=2;
display.style.color="white"
display.textContent=choosen
button.addEventListener("click",function(){
    button.textContent="New Colors!!";
    if(type===2)
    {
    colors=generatecolor(6);
    choosen=pickcolor();
    display.textContent=choosen;
    for(i=0;i<colors.length;i++)
     {
       squares[i].style.background=colors[i];
     }
    h1.style.background="black"
    }
    else
    {
      colors=generatecolor(3);
    choosen=pickcolor();
    display.textContent=choosen;
    for(i=0;i<colors.length;i++)
     {
       squares[i].style.background=colors[i];
     }
    h1.style.background="black"
    }
    messagedisplay.textContent="";
});
button1.addEventListener("click",function(){
     button1.classList.add("selected");
     button2.classList.remove("selected");
     colors=generatecolor(3);
     choosen=pickcolor();
     display.textContent=choosen;
     for(i=3;i<squares.length;i++)
     {
       squares[i].style.display="none";
     }
     for(i=0;i<colors.length;i++)
     {
       squares[i].style.background=colors[i];
     }
     h1.style.background="black";
     type=1;
     messagedisplay.textContent="";
})
button2.addEventListener("click",function(){
     button2.classList.add("selected");
     button1.classList.remove("selected");
     colors=generatecolor(6);
     choosen=pickcolor();
     display.textContent=choosen;
     for(i=0;i<squares.length;i++)
     {
       squares[i].style.display="block";
     }
     for(i=0;i<colors.length;i++)
     {
       squares[i].style.background=colors[i];
     }
     h1.style.background="black";
     type=2;
     messagedisplay.textContent="";
})
for(var i=0;i<squares.length;i++)
{
  squares[i].style.background=colors[i];
  squares[i].addEventListener("click",function(){
    var d=(this.style.background);
    if(d===choosen)
    {
       messagedisplay.textContent='Correct!!';
       changecolors(squares,d);
       h1.style.background=d;
       button.textContent="Play Again?";
    }
    else
    {
      messagedisplay.textContent='Worng! Try again';
      this.style.background="black"
    }
  })
}
function changecolors(newcolor,d)
{
   for(var i=0;i<newcolor.length;i++)
   {
     squares[i].style.background=d;
   }
}
function pickcolor()
{
   var f=Math.floor(Math.random()*colors.length)
   return colors[f]
}
function generatecolor(num)
{
  var arr=[];
  for(var i=0;i<num;i++)
  {
     arr.push(randomcolor());
  }
  return arr;
}
function randomcolor()
{
  var r=Math.floor(Math.random()*256)
  var g=Math.floor(Math.random()*256)
  var b=Math.floor(Math.random()*256)
  return "rgb("+r+", "+g+", "+b+")";
}