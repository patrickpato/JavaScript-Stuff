
const person = {
    firstName:"Johnte", 
    lastName : "Opiyo", 
    id:52621, 
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
};
function jsMethods(){
    return document.getElementById("samplep").innerHTML=person.fullName();
}
jsMethods()
