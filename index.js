const express = require("express")

const server = express()

server.use(express.json())

server.get("/", (req,res) => {
  const songs = [{id:1, name: "Final Countsssssdown"}]

  res.status(200).json(songs)
})

// make the port dynamic
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`running on port ${port}`))