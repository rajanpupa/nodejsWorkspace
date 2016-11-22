function processData(input) {
    var lines = input.split('\n');

    for(var j =1; j<lines.length; j++){
        var inputNext = lines[j];
        var len = inputNext.length;
        //console.log( "length = " + len  );
        var step = 0;

        if(len %2 != 0){
            var mid = len/2 - 1;        
        }else{
            var mid = len/2 ;
        }
        for(var i=0; i < mid ; i++){
            var inStep = inputNext.charAt(i).charCodeAt(0) - inputNext.charAt(len - 1 - i).charCodeAt(0);
            //console.log(input.charAt(i) + "=>" + input.charAt(len-1-i) + " , step = " + inStep);
            step += Math.abs( inStep );
        }
        console.log(step);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
