
/*
    HackerRank program - find the steps required to change an input into palindrome
 */
function processData(input) {
    //Enter your code here
	//var input = "cba";
    var len = input.length;
	//console.log( "length = " + len  );
    var step = 0;

    if(len %2 != 0){
        var mid = len/2 - 1;
    }else{
        var mid = len/2 ;
    }
    for(var i=0; i < mid ; i++){
        var inStep = input.charAt(i).charCodeAt(0) - input.charAt(len - 1 - i).charCodeAt(0);
        //console.log(input.charAt(i) + "=>" + input.charAt(len-1-i) + " , step = " + inStep);
        step += Math.abs( inStep );
    }
    console.log(step);
};

processData("abcde");