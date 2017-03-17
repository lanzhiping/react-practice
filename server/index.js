const express = require("express");

function serviceRouter() {}

function redirectToDefault(req, res) {
    res.redirect("/");
}

express()
    .use(express.static("./build"))
    // .use("/service", serviceRouter)
    // .use("/*", redirectToDefault)
    .get("/", express.static("./client"))
    .listen("3000", () => { console.log("listening on 3000."); });

