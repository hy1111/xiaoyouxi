var express =require("express");
var app=express();
app.use(express.static("."));
app.get("/",function(req,res){
	res.send("hello world");

});
var server =app.listen(9000,function(){
	console.log("listen"+server.address().port+"...");
})