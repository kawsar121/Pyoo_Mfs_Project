// Step:1 Set button EventHandler
document.getElementById('btn-login').addEventListener('click',function(event){
    // Step:2 browser reloade problem slove
    event.preventDefault()              //preventDefault() eta beboharer karon holo eta na dile page ta auto reloade howe jaw,,, console kore ar kisu pawa jaw na
    // console.log("thanks for login us")

    // Step:3 Get Phone Number
    const phoneNumber = document.getElementById("phone");
    const phoneValue = phoneNumber.value;
    const pin = document.getElementById('pin');
    const pinValue = pin.value;
    // console.log(phoneValue , pinValue)

    // Step:4 Phone and pin validation Cheek (this is not actual right way)
    if(phoneValue === '5' && pinValue === '6721'){
        console.log("you are logedin")
        window.location.href = '/Home/home.html'
    }
    else{
        alert("wrong pin or phone")
    }
})