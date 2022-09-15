const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
console.log(date);
const app = express();
var items = [];
var workItems = [];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.get("/",function(req,res){
  // res.send("Hello Everyone ");

  res.render("list",{listTitle : day,newListItems:items});
});

app.post("/",function(req,res){
  let item = req.body.get_String;
items.push(item);
  console.log(items);
      res.redirect("/");
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work list",newListItems : workItems });
});

app.post("/work",function(req,res){
  let itemt = req.body.get_String;
  workItems.push(itemt);
  console.log(workItems);
      res.redirect("/work");
});

app.get("/about",function(req,res){
  res.render("about");

})


app.listen(3000,function(){
  console.log("Server is responding Very well and accepting my everh command ");
});
