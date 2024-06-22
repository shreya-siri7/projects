let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value = string ;

        }
        
        
        else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;

        }

        else if (e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;

        }
        
        
        else {
            string += e.target.innerHTML;
            display.value = string;
        }



    });
});

const operatorPower = document.querySelector('.operator-power');
const operatorPowerOn = document.querySelector('.operator-power-on');
const operatorPowerOff = document.querySelector('.operator-power-off');
const operatorBlue = document.querySelector('.operator-blue');
const operatorRed = document.querySelector('.operator-red');
const operatorBlack = document.querySelector('.operator-black');


operatorPowerOn.onclick = () => {
    operatorPowerOn.classList.add("active");
    operatorPowerOff.classList.remove("active");
}

operatorPowerOff.onclick = () => {
    operatorPowerOn.classList.remove("active");
    operatorPowerOff.classList.add("active");
    buttons.classList.add("active");

}

