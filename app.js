const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

app.get("/", (req, res) => {

  res.send(`seetha App`)

})

app.get("/home", (req, res) => {

  res.sendFile(__dirname + "/views/home.html")
  
})

app.get("/about", (req, res) => {
  
  res.sendFile(__dirname + "/views/about.html")

})
app.get("/work", (req, res) => {
  
  res.sendFile(__dirname + "/views/work.html")

})

app.get("/gallery", (req, res) => {
  
  res.sendFile(__dirname + "/views/gallery.html")

})

app.get("*", (req, res) => {

  res.send("Page not found - 404")

})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})