const express = require("express");
const app = express();
const port = process.env.PORT || 2000;

app.get("/", (req, res) => {
    res.send("genX on-air")
});

app.listen(port, ()=>{
    console.log(`genX app listening on port: ${port}`);
});
