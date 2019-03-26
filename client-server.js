const express = require('express');
const app = express();

app.use(express.static("client"));

port = process.env.PORT || 4000;

app.listen(port, (err) => {
    if (err) throw err
    console.log("Listening on port:", port);
});
