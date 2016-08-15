function func1(){
	alert("You get function 1");
}
function func2(){
	alert("You get function 2");
}

var bindings = {
	"m": "func1()",
	"n": "func2()",
};

var descriptions = new Array(
	"This letter executes function 1",
	"This letter executes function 2"
);