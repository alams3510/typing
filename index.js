 let hidden=document.getElementById("hidden");
 let range=document.getElementById("range");
 let textarea=document.getElementById("textarea");
 let result=document.getElementById("result");
 let text=document.getElementById("text");

let msec=document.getElementById("msec");
let sec=document.getElementById("sec");
 let mili="0";
 let second="0";

let stop;
const starts=()=>{
    document.getElementById("start").disabled= true;
    document.getElementById("start").style.background= "grey";
    document.getElementById("stop").style.background= "black";
    textarea.disabled=false;
    textarea.focus();
    textarea.value="";
    
    let x=hidden.value;
   stop=  setInterval(clockstart,10);
   if(x!=''){
    setTimeout(stops,60000*x);
    range.max=60*x;
   }
   document.getElementById('selection').disabled=true;
   result.style.display="none";
}

const stops=()=>{
    clearInterval(stop);
    document.getElementById('selection').disabled=false;
    textarea.disabled=true;
    document.getElementById("start").disabled= false;
    document.getElementById("stop").style.background= "grey";
    document.getElementById("start").style.background= "black";
    result.style.display="block";
    correction();
}

const reset =()=>{
    range.value="0";
    clearInterval(stop);
    mili=0;
    second=0;
    sec.innerHTML="00";
    msec.innerHTML="00";
    document.getElementById("start").style.background= "black";
    document.getElementById("stop").style.background= "black";
    result.style.display="none";

}
function getselect(){
    var select = document.getElementById('selection');
    var values = select.options[select.selectedIndex].value;
    hidden.value=values; 
}
 

const clockstart=()=>{
mili++;
if(mili<10){
    msec.innerHTML="0"+mili;
}
if(mili>9){
    msec.innerHTML=mili;
}
if(mili>99){
mili=0;
second++;
range.value=second;
}
if(second<10){
    sec.innerHTML="0"+second;
    range.value=second;

}
if(second>9){
    sec.innerHTML=second;
    range.value=second;

}
}


function correction(){
let texts=text.innerText.split(" ");
let array=textarea.value.split(" ");
let right=0,wrong=0; 
for(let i=0;i<texts.length;i++){
if(text[i]===array[i]){
 right++;
}else{
    wrong++;
}
}

console.log(texts)
console.log(array)
result.innerHTML=`Your WPM Speed is ${wrong-1/hidden.value} , your correct answer are ${wrong-1}  in total of ${ right} words.`;

}

