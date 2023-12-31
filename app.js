const express = require("express")
const app = express()
const port = 3000
const hbs = require("hbs");
const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res, next) =>{
  res.render("home")
}) 
app.get("/setting", (req, res, next) =>{
  res.render("setting")
}) 
app.get("/profile", (req, res, next) =>{
  res.render("profile")
}) 
app.get("/inventory", (req, res, next) =>{
  res.render("inventory")
}) 
app.get("/category", (req, res, next) =>{
  res.render("category")
}) 
app.get("/product", (req, res, next) =>{
  res.render("product")
}) 

app.get("*", (req, res) => {

  res.send("Page not found - 404")

})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

