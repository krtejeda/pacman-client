const express = require('express');
const app = express();

app.use(express.static("client"));

app.listen(4000, (err) => {
    if (err) throw err
    console.log("Listening on port 4000");
});
