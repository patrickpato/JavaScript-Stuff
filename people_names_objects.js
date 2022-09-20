const person = {firstName:"Johnte", lastName:"Opiyo", age:"50", occupation:"mechanic"}
function getPersonDetails(){
    return document.getElementById("samplep").innerHTML=person.firstName + " " + person.lastName + " is " + person.age + " years old and his occupation is " + person.occupation;
}
getPersonDetails()