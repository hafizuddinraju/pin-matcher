
function getPin(){
    const pin = getPinNumber();
    const pinString = pin +'';
    if(pinString.length === 5){
        return pin;
    }
    else{
        return getPin();
    }
}
function getPinNumber(){
    const randomNumber = Math.round(Math.random()*90000) + 10000;
    return randomNumber;
 }
document.getElementById('btn-generate').addEventListener('click', function(){
    const pin = getPin();
    const showPin = document.getElementById('show-pin');
    showPin.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const enterInputField = document.getElementById('enter-pin-field');
    const enterInputFieldValue = enterInputField.value;
    if(isNaN(number)){
        if(number === 'C'){
            enterInputField.value = '';
        }
        else if (number === '<'){
            const digit = enterInputFieldValue.split('');
            digit.pop();
            const updateNumber = digit.join('');
            enterInputField.value = updateNumber; 
        }
    }
    else{
        const newNumber = enterInputFieldValue + number;
        enterInputField.value = newNumber;
        
    }
})

document.getElementById('btn-submit').addEventListener('click',function(){
    const generatePin = document.getElementById('show-pin');
    const generatePinString = generatePin.value;

    const inputPin = document.getElementById('enter-pin-field');
    const inputPinString = inputPin.value;
    const matched = document.getElementById('matched');
    const fail = document.getElementById('fail');

    if(generatePinString === inputPinString){
        
        matched.style.display = 'block'
        fail.style.display = 'none'

    }
    else{

        
        fail.style.display = 'block'
        matched.style.display = 'none'
    }
        
    
})


 
 