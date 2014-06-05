function myJavaScriptFunction() {
	var start = new Date().getMilliseconds();
	
	// your code
	
	var stop = new Date().getMilliseconds();
	var executionTime = stop - start;
	console.log("myJavaScriptFunction() executed in " + executionTime + " milliseconds");
}