class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    static mytype() {
        console.log("Animal");
    } 
    speak() {
        console.log("Hi there " + this.speaks);
    }
}

Animal.mytype();
let dog = new Animal("dog", 4, "bhow bhow"); // create object
let cat = new Animal("cat", 4, "meow meow");
dog.speak();
cat.speak(); // call functions on object