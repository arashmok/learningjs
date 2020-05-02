//showMessage("Test message from the function!");
let person = {
    name: "Arash",
    age: 33,
    sex: "male",
    showInfo: function() {
        return (this.name + " is " + this.age);
    }
};
let now = new Date();

clickButton("Welcome!", "button")
showMessage(now.toDateString(),"date", "red");
showMessage(person.showInfo(),"message", "blue");
