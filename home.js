//showMessage("Test message from the function!");
let person = {
    name: "Arash",
    age: 33,
    sex: "male",
    showInfo: function() {
        return (this.name + " is " + this.age);
    }
};
showMessage(person.showInfo());
