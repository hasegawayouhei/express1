const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const con = mysql.createConnection({
	host: "localhost",
	user:"root",
	password:"",
	database:"test"
 });


//  app.get("/users" , function(req,res){
	 
// 	 const unko = req.query.id;
// 	 res.send("hello," + unko);
	 
 
//  });


 //localhost:3000/cutomers?id=数字 で任意のレコードを抽出

 app.get("/customers" , (req,res,next) => {

 	const sql = "select * from test.customers";
	 const search = req.query.id;
 	con.query(sql, function (err,result,fields){
 		if(err) throw err;
 	
 		res.send(result[search]);
		
 	});
 	});

 

 app.get("/salary", (req,res) => {

	
	const sql = "select * from test.salary";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[search]);
		
	});
	});

 app.get("/belongto", (req,res) => {

	
	const sql = "select * from test.belongto";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[search]);
		
	});
	});

 app.get("/belongto", (req,res) => {

	
	const sql = "select * from test.belongto";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[search]);
		
	});
	});

 app.get("/categories", (req,res) => {

	
	const sql = "select * from test.categories";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[serach]);
		
	});
	});

 app.get("/customerclasses", (req,res) => {

	
	const sql = "select * from test.customerclasses";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[search]);
		
	});
	});

 app.get("/departments", (req,res) => {

	
	const sql = "select * from test.departments";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[search]);
		
	});
	});

 app.get("/employees", (req,res) => {

	
	const sql = "select * from test.employees";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[search]);
		
	});
	});

 app.get("/member", (req,res) => {

	
	const sql = "select * from test.member";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[search]);
		
	});
	});

 app.get("/member2", (req,res) => {


	const sql = "select * from test.member2";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[serch]);
		
	});
	});

 app.get("/memberb", (req,res) => {

	
	const sql = "select * from test.memberb";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
	
		res.send(result[search]);
		
	});
	});

 app.get("/prefecturals", (req,res) => {

	
	const sql = "select * from test.prefecturals";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
	
		res.send(result[search]);
		
	});
	});

 app.get("/products", (req,res) => {


	const sql = "select * from test.products";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result[search]);
		
	});
	});

 app.get("/sales", (req,res) => {

	
	const sql = "select * from test.sales";
	const search = req.query.id;
	con.query(sql, function (err,result,fields){
		if(err) throw err;
	
		res.send(result[search]);
		
	});
	});
	

app.use((req,res) =>{
	res.sendStatus(404);
});



 app.listen(port,() =>console.log(`Example app litening on port${port}!`));
