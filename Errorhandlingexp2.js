const fs= require("fs");

fs.readFile('foo,txt',function(err,data){
    if(err){
        console.error(err);
    }
    else{
        console.log(data.tostring());
    }
});
console.log("program Ended");