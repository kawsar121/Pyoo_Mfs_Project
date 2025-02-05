document.getElementById("mainMoneyAdd").addEventListener('click', function(event){
    event.preventDefault(); //reloade e problem slove korar jonno eta use korsi
    
    //Step : 2 input money added
    const inputAmount = document.getElementById('inputAmountAdd');
    const inputAmountValue = inputAmount.value;
    // AVilabe balance
    const avilabebalace = document.getElementById('abiableBalance').innerText;
    // console.log(avilabebalace)

    const inputPin = document.getElementById("inputPin");
    const inputPinValue = inputPin.value;
    if(inputPinValue === '6721'){
        const add = avilabebalace.innerText = avilabebalace + inputAmountValue ;
        console.log(add)
    }
    else{
        alert("something Wrong")
    }
})