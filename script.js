const countVaule=document.getElementById('counter');
function increment(){
    let value=parseInt(countVaule.innerText);
    value=value+1;
    countVaule.innerText=value;
};
function decrement(){
    let value=parseInt(countVaule.innerText);
    value=value-1;
    countVaule.innerText=value;
};