document.getElementById("mainMoneyAdd").addEventListener('click', function(event){
    event.preventDefault(); //reloade e problem slove korar jonno eta use korsi
    
    //Step : 2 input money added
    const inputAmount = document.getElementById('inputAmountAdd');
    const inputAmountValue = parseFloat(inputAmount.value);
    
   
    //Step:3 Get AVilabe balance
    const avilabebalace = document.getElementById('abiableBalance').innerText;
    const avilabebalaceConvert = parseFloat(avilabebalace)
    // console.log(convert)
    // console.log(avilabebalace)

    // Step:4 Input pin Addeded
    const inputPin = document.getElementById("inputPin");
    const inputPinValue = inputPin.value;


    // Step:5 Pin Verify
    if(inputPinValue === '6721'){
        const newBalance= avilabebalaceConvert + inputAmountValue ;
        document.getElementById("abiableBalance").innerText = newBalance
        
    }
    else{
        alert("something Wrong")
    }
})