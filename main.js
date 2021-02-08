console.log("helloooooo")

//TASK 1:

//Create a constructor function for generating student objects.
//Each student object should have name, last name, age and average grade.

function Student(name,lastName,age,avgGrade) {
     this.name = name;
     this.lastName = lastName;
     this.age = age;
     this.avgGrade = avgGrade;
 }
 var marko = new Student("Marko","Markov",22,8.5);
 var loo = new Student("Loo","Luna",25,7.9);
 var lily = new Student("Lily","Li",20,9.7);
 console.log(marko,loo,lily)

//TASK 2:

//Create a constructor function for generating objects with data about players of your favorite football team (name, age, goals scored, yellow cards). 

function Statistics(name, age, goals, yellowCards){
    this.name = name;
    this.age = age;
    this.goals = goals;
    this.yellowCards = yellowCards;
}
var player1 = new Statistics("Ronaldo",33,150,10);
var player2 = new Statistics("Messi",29,110,9);
var player3 = new Statistics("Vidic",36,25,10);
var player4 = new Statistics("Zidan",40,90,30);

console.log(player1,player2,player3,player4)

//TASK 3:

/* Try to do the same thing as in the previous task, but when creating player objects try to do it dinammicaly (using loop). For that you'll need data in following format:

var players = [["Player name", 27, 12, 4], ["Player name", 27, 12, 4], ["Player name", 27, 12, 4]];

This array is just example, change data in this array with data of players you choose. */

var players =[["Ronaldo",33,150,10],["Messi",29,110,9],["Vidic",36,25,10],["Zidan",40,90,30]];
var newPlayers = [];
function Statistics(name, age, goals, yellowCards){
    this.name = name;
    this.age = age;
    this.goals = goals;
    this.yellowCards = yellowCards;
}
for (let i = 0; i < players.length; i++) {
    newPlayers[newPlayers.length] =  new Statistics(players[i][0],players[i][1],players[i][2],players[i][3])
    
   
}
console.log(newPlayers)

//TASK 4:
/* Create a construction function that should contain properties for first number, second number, and method. 
Then create a four instances of object from that constructor, each with different numbers, and different method. 
First should have method for multiplying of its own numbers, second for dividing, third for adding and fourth for subtracting.
 */

 function SomeNumbers(firsNumber,secondNumber){
     this.firsNumber = firsNumber;
     this.secondNumber = secondNumber;
     this.doSomething = function(){
         console.log(firsNumber * secondNumber)
         console.log(firsNumber / secondNumber)
         console.log(firsNumber + secondNumber)
         console.log(firsNumber - secondNumber)

     }

 }
 var numbers = new SomeNumbers(36,10,function(){});
 var numbers = new SomeNumbers(452,10,function(){});
 var numbers = new SomeNumbers(58,10,function(){});
 var numbers = new SomeNumbers(36,10,function(){});
 numbers.doSomething()

//TASK 5:
//Test your understanding of closures and scope with following examples.


function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
    function foo() {
       return 2;
    }
 }

 test();

 //What is result?

		var a = 1; 

		function someFunction(number) {
		  function otherFunction(input) {
		    return a;
		  }
		  
		  a = 5;
		  
		  return otherFunction;
		}

		var firstResult = someFunction(9);
		var result = firstResult(2);


        var fullname = 'John Doe';
		var obj = {
		   fullname: 'Colin Ihrig',
		   prop: {
		      fullname: 'Aurelio De Rosa',
		      getFullname: function() {
		         return this.fullname;
		      }
		   }
		};

		console.log(obj.prop.getFullname());

		var test = obj.prop.getFullname;

		console.log(test());

        var a = 1; 
		function b() { 
		    a = 10; 
		    return; 
		    function a() {} 
		} 
		b(); 
		console.log(a);


