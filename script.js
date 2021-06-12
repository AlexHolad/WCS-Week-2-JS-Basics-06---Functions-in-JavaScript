// const name = "Harvey Harriot";

// console.log(`Hello, I'm ${name}`);
// console.log(`You can write Js expressions: ${1 + 1}`);
// console.log(`You can write Js expressions: ${1 < 1}`);

// function sum(a, b){
// 	return a + b;
// }
// console.log(sum(1, 2));


// function sayMyName() {
//     let name = "Pierre"
//     console.log(name)
//     /// works fine within the context of the function
// }

// function sayMyFullName() {
//     let lastName = 'Gerard'
//     console.log(lastName + ' ' + name)
//     // Wont work
// }



function login(name, password){
	if(name === "Alex" && password === "para"){
		return true;
	}
	else{
		return false
	}
}

let userName = prompt("What's your name?");
let userPassword = prompt("What's your password?");

if(login(userName, userPassword)){
		console.log("Welcome!");
}
else{
		console.log("Wrong credentials...");
}