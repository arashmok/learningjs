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

const values = ['a', 'b', 'c'];
const set = values.filter(function (item) {
    return item > 'b';
});
values.forEach(function (item) {
    console.log(item);
})


clickButton('button');
showMessage(now.toDateString(),"date", "red");
showMessage(person.showInfo(),"message", "blue");
showMessage(set, "array", "black")