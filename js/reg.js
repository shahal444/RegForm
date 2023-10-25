function validate(){
    var request1=document.getElementById('request1');
    var request2=document.getElementById('request2');
    var request3=document.getElementById('request3');
    var reques4=document.getElementById('request4');
    var request5=document.getElementById('request5');
    
    if(validate1(request1," Enter Your name")){
        if(validate2(request2,"Choose your Gender")){
            if(validate3(request3," Enter Your Mobile Number")){
                if(validate4(request4,"Fill Your address")){
                    if(validate5(request5," Enter Your Password between")){
                        }
                    }
                }
            }
        }
    }




function validate1(element,checking)
{
if(element.value.length==0){
    alert(checking);
    element.focus();
    return false;
}
return true;

}

function validate2(element,checking){
if(element.value=="default"){
    alert(checking);
    return false;  
}
else{
    return true;
}
}

function validate3(element,checking){
var numericExpresion=/^[0-9]+$/

if(element.value.match(numericExpresion)){
return true;  
}
else{
    alert(checking);
    element.focus();
    return false;
}
}

function validate4(element,checking){
var alpha=/^[a-z A-Z]+$/

if(element.value.match(alpha)){
return true;  
}
else{
    alert(checking);
    element.focus();
    return false;
}
}

function validate5(element,min=6,max=8){
if(element.value.length>=min && element.value.length<=max){
    return true;  
}
else{
    alert("["+min+"]"+"&"+"["+max+"]");
    element.focus();
    return false;
}
}