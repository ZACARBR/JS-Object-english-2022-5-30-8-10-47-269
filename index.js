//----------------------------------Requirement number 1

var user = {
    name: "John",
    surname: "Mike",

    updateName: function(){
        this.name = "Peter";
    },

    deleteName: function(){
        delete this.name;
    }
};
// for checking....

console.log(user.name);
user.updateName();
console.log(user.name);
user.deleteName();
console.log(user.name);

//-----------------------------------Requirement number 2

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
    // write your code here...

//for checking
console.log(fruit.apple + fruit.pear + fruit.peach)
