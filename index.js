const express = require("express")

const server = express()

server.use(express.json())

server.get("/", (req,res) => {
  const songs = [{id:1, name: "Final Countsssssdown"}]

  res.status(200).json(songs)
})

const port = 5000;
server.listen(port, () => console.log(`running on port ${port}`))