const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/numbers", async (req, res) => {
    let queries = req.query.url;
    let numbers = [];
    let k = 0;
    queries.forEach(async(e) => {
        console.log(e);
        await axios({
            url: `${e}`,
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            }
        }).then((data) => {
            data.data.numbers.map((e) => {
                numbers.add(e);
            })
        }).catch((err) => {
            console.log(err.message);
        })
    })
    console.log(numbers);
    return res.status(200).json(numbers.values())
    
})