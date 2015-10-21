//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer

Allows us to reuse functions with different context, or to decide which object should be focal when invoking a function or object.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer

In JavaScript, the thing called “this”, is the object that "owns" the JavaScript code.

The value of “this”, when used in a function, is the object that "owns" the function.

The value of “this”, when used in an object, is the object itself.

The “this” keyword in an object constructor does not have a value. It is only a substitute for the new object.

The value of this will become the new object when the constructor is used to create an object.

  // 3) What is the difference between call and apply?

      //Answer

They are basically the same, but with call you input each parameter individually, whereas with apply you input parameters within an array.

  // 4) What does .bind do?

      //Answer

Bind creates a new function with the same body and scope as the original function, but where 'this' occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

var user = {
    username: "something",
    email: "something@something.com",
    getUsername: function() {
        return this.username;
    }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function () {
        this.move += 10;
    };
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here

getYear.call(prius);
getYear.call(mustang;)

//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here

undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

The window.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.call(user), 5000);