//  HERE WE WILL BE TALKING ABOUT CLASS WITH STATIC PROPERTIES AND METHODS AND HOW TO USE THEM
class Human{
    constructor(hairColor, skinColor, hairTexture){
        this.hairColor = hairColor;
        this.skinColor = skinColor;
        this.hairTexture = hairTexture
    }

    // here is about method
    // method is a function inside an object or a class since we are dealing with class
    // first method is eating
    isAfrican(hairColor,skinColor,hairTexture){
        return `people with ${hairColor} color , ${skinColor} and ${hairTexture} is probably an african `
    }

    // we can also solve simple calculation using methods
    calc(x,y){
        return x * y
    }

    // static properties dont need to be instantiated , we call the function on the main class 
    //  example
    static divid(x,y){
        return x/y
    }
}

//  to use this method , we have to instantiate the class, meaning that we can use the class as a blueprint for many other objects

let human = new Human()
console.log(human.isAfrican('black','black','strong'))

//  this will be the outpu ; people with black color , black and strong is probably an african 


console.log(human.calc(4,5))

// the result will be 20 because 5 * 4 is 20

//  in working with static , we have to call the function directly without instantiating it
console.log(Human.divid(20,5))

// here the output is 4 , static is important if you are working with big project and dont need to be instantiating all class just to run your function