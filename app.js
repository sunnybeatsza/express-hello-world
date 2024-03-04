const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3001;

const getMathFacts = async () => {
  const url =
    "https://numbersapi.p.rapidapi.com/8/19/date?fragment=true&json=true";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d79c54434fmshb2510432f27840cp180d48jsnef22cbb51777",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    return "Error fetching data";
  }
};

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/text", (req, res) => res.send("Hello World"));

app.get("/api-info", async (req, res) => {
  try {
    const result = await getMathFacts();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
