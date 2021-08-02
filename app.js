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



 app.get("/customers", (req,res,next) => {

 	const sql = "select * from test.customers";
 	con.query(sql, function (err,result,fields){
 		if(err) throw err;
 	
 		res.send(result);
		
 	});
 	});

 app.get("/salary", (req,res) => {

	
	const sql = "select * from test.salary";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/belongto", (req,res) => {

	
	const sql = "select * from test.belongto";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/belongto", (req,res) => {

	
	const sql = "select * from test.belongto";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/categories", (req,res) => {

	
	const sql = "select * from test.categories";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/customerclasses", (req,res) => {

	
	const sql = "select * from test.customerclasses";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/departments", (req,res) => {

	
	const sql = "select * from test.departments";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/employees", (req,res) => {

	
	const sql = "select * from test.employees";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/member", (req,res) => {

	
	const sql = "select * from test.member";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/member2", (req,res) => {


	const sql = "select * from test.member2";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/memberb", (req,res) => {

	
	const sql = "select * from test.memberb";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
	
		res.send(result);
		
	});
	});

 app.get("/prefecturals", (req,res) => {

	
	const sql = "select * from test.prefecturals";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
	
		res.send(result);
		
	});
	});

 app.get("/products", (req,res) => {


	const sql = "select * from test.products";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
		
		res.send(result);
		
	});
	});

 app.get("/sales", (req,res) => {

	
	const sql = "select * from test.sales";
	con.query(sql, function (err,result,fields){
		if(err) throw err;
	
		res.send(result);
		
	});
	});
	

app.use((req,res) =>{
	res.sendStatus(404);
});



 app.listen(port,() =>console.log(`Example app litening on port${port}!`));
