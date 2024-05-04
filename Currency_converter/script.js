const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

//Here we are fetching data fro codes.js file. Always remember, if you want to fetch data from one js file
// to another js file then put the first(one) js before the other in html file..
//Eg here in html file codes.js is included before script.js... so that countryList could be fetched in script
//file.....

for(let select of dropdown) {
    for(currCode in countryList){ 
        let newop= document.createElement("option");
        newop.innerText= currCode;
        newop.value=currCode;
        //Default usd and inr setting....
if(select.name==="from" && currCode==="USD"){
    newop.selected="selected";
}else if(select.name==="to" && currCode==="INR"){
    newop.selected="selected";
}
   
    select.append(newop);  
}

select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
}


const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

const updateExchangeRate=async()=>{
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval==="" || amtval<1){
        amtval=1;
        amount.value="1";
    }
   
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response= await fetch(URL);
    let data= await response.json();
   
    let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amtval*rate;
    msg.innerText= `${amtval} ${fromCurr.value}= ${finalAmount} ${toCurr.value}`;
    
}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault(); //-->This will prevent all default set events which happenend before on clicking....
    updateExchangeRate();
});

window.addEventListener("load",()=>{
updateExchangeRate();
});
