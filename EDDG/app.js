const express = require("express");
const rts = require("./routes")

const app = express();



app.get("/", rts);

app.listen(port, (req, res) => {
    console.log(`listen in port ${port}`);
});