//A function that takes at least three arguments
//and returns the result of some set of operations
//using those arguments
const percentage = function(num1,num2,num3){
	oper = (num1+num2)*(num3*0.01)
	return(oper)
	//calculator of percentage
};
console.log(percentage(10, 90, 20))

//A function that takes no 
//arguments and returns something
const noInput = function(){
	return("There is no Input!!!")
};
console.log(noInput())

//A function that takes arguments,
//does something but does not return anything

const sum = function(num1,num2){
	a =  num1 + num2
};
console.log(sum(12, 34))


//A function that takes three strings
//and returns the string that is the longes

const strings = function(str1, str2, str3){
	if (str1.length > str2.length && str1.length >  str3.length) {
		return(str1 + " is the longest")
	}
	else if (str2.length > str1.length && str2.length > str3.length){
		return(str2 + " is the longest")
	}
	else if (str3.length > str1.length && str3.length > str2.length){
		return(str3 + " is the longest")
	}
};
console.log(strings("hello","hi","yeeeee!"))

//A function that takes two numbers and returns 0 if they are equal,
//1 if the first is larger and -1 if the second is larger

const compare = function(n1, n2){
	if (n1 === n2){
		return(0)
	}
	else if(n1 > n2){
		return(1)
	}
	else if(n2 > n1){
		return(-1)
	}
};
console.log(compare(5, 4))


//Create a multiply function (that multiplies the
//two given arguments together and returns the result)

const multi = function(arg1,arg2){
	return(arg2 * arg1)
};
console.log(multi(12, 34))


//Create a divide function (that divides the
//first argument by the second and returns the result)

const divide = function(number1,number2){
	return(number1 / number2)
};
console.log(divide(84, 4))

//triangleArea function that takes base and
//height as input and returns the area of a triangle

const triangleArea = function(base, height){
	return (divide(multi(base,height),2));
}
console.log(triangleArea(4, 5))

const numLength = function(num){
	const stringify = num + '';
	return stringify.length;
};
console.log(numLength(545846))


const stringsAndNum = function(str, str1, num){
	const concat = str + '' + str1 + ''
	if(concat.length > num){
		return(1)
	}
	else if(concat.length < num){
		return(-1)
	}
};

console.log(stringsAndNum("hello", "dude", 5))

const runStuff = function(num1,num2,string){

	if(string === 'rectangle'){
		const area = num1 * num2;
		return area;
	}else if(string === 'triangle'){
		return divide(multi(num1,num2),2);
	}else{
		return -1;
	};
};

 console.log(runStuff(10,15,'triangle'))

