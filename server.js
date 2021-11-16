const express = require("express")


const server = express();
const PORT = process.env.PORT || 8080;

server.set("port", PORT);
server.use(express.static("public"));
server.use(express.json());

server.get("/", (req, res, next) => {
    res.status(200).send("Hello World").end();
});

server.get("/flip", (req, res, next) => {
    res.status(200).send("Button Works").end();
})
server.post("/flip", (req, res, next) => {
    try{
    let gameID = req.body["gameID"];
    let responsetext = gameID;
    res.status(200).send(responsetext).end();}
    catch{
        res.status(300).send("something went wrong").end();
    }
})

server.listen(server.get("port"), function(){
    console.log("server running", server.get("port"));
});
