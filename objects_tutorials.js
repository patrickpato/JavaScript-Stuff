const car={type:"Fiat", model:"500", color:"white"};
function displayCar(){
    return document.getElementById("samplep").innerHTML="The car type is " + car.type;
}
displayCar();