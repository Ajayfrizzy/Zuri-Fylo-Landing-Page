let inputFieldFirst = document.querySelector("#input1");
let errorTop = document.querySelector("#error-msg-top");


let inputFieldSecond = document.querySelector("#input2");
let errorDown = document.querySelector("#error-msg-down");



function emailValidation(){
    if(!inputFieldFirst.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorTop.innerHTML = "Please check your email";
        //inputFieldFirst.style.outline = "1px solid black"
        inputFieldFirst.style.border ="1px solid red";
        return false;
    }
    errorTop.innerHTML = " ";
    inputFieldFirst.style.border = "1px solid green";
    return true;
}


function emailValidate(){
    if(!inputFieldSecond.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorDown.innerHTML = "Please check your email";
        inputFieldSecond.style.border = "1px solid red";
        return false;
    }
    errorDown.innerHTML = " ";
    inputFieldSecond.style.border = "1px solid green";
    return true;
}
