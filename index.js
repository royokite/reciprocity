const express = require('express');

const app = express();

app.get("/", (request, response) => {
    response.send("<h1>Welcome to My Web Service<h1>");
});

app.listen(3000);

app.get("/:a/:b/:c", (request, response) => {
    let {a} = request.params;
    let {b} = request.params;
    let {c} = request.params;
    let sum = Number(a) + Number(b) + Number(c);
    response.type("application/xml");

    response.send(`<int>${sum.toString()}</int>`);
});
