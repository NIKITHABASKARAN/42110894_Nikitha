let bmi=0

function calculateBMI(){
    let h=document.forms[0]['height'].value
    console.log(h)
    let w=document.forms[0]['weight'].value
    console.log(w)
    bmi = (w / ((h * h)/ 10000))
    console.log(bmi)
    document.getElementById('box4').innerHTML='Your BMI is: ' + bmi.toFixed(2)


if(bmi<18.5){
    document.getElementById("box5").innerHTML='You are Underweight'

}
else if(bmi>18.5 && bmi<24.9){
    document.getElementById("box5").innerHTML='You are Healthy'
}
else if(bmi>25 && bmi<29.9){
    document.getElementById("box5").innerHTML='You are Overweight'
}
else if(bmi>30 && bmi<39.9){
    document.getElementById("box5").innerHTML='You are Obese'
    }
else{
    document.getElementById("box5").innerHTML='You are Severely Obese'
}
}

 


