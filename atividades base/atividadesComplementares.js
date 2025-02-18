const express = require("express");
const app = express();

//Questão 1 - atividades do classroom
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

//Questão 2 - atividades do classroom
app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Seja bem vindo(a) ${name}`);
});

//Questão 3 - atividades do classroom
app.get("/sum/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid numbers");
  }

  res.send((a + b).toString());
});

//Questão 4 - atividades do classroom
app.get("/subtract/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid numbers");
  }

  res.send((a - b).toString());
});

//Questão 5 - atividades do classroom
app.get("/multiply/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid numbers");
  }

  res.send((a * b).toString());
});

//Questão 6 - atividades do classroom
app.get("/divide/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid numbers");
  }

  res.send((a / b).toString());
});

//Questão 7 - atividades do classroom
app.get("/check-parity/:number", (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    return res.status(400).send("Invalid numbers");
  }

  if (number % 2 == 0) {
    return res.send(`O número ${number} é par`);
  } else if (number % 2 == 1) {
    return res.send(`O número ${number} é ímpar`);
  } else {
    return res.send("Ocorreu um erro");
  }
});

//Questão 8 - atividades do classroom
app.get("/full-name/:firstname/:lastname", (req, res) => {
  const firstName = req.params.firstname;
  const lastname = req.params.lastname;
  res.send(`${firstName} ${lastname}`);
});

//Questão 9 - atividades do classroom
app.get("/convert-temperature/:temperature", (req, res) => {
  const temperatureCelcius = parseInt(req.params.temperature);

  if (isNaN(temperatureCelcius)) {
    return res.status(400).send("Invalid number");
  }

  let temperaturaFahrenheit = temperatureCelcius * 1.8 + 32;
  res.send(`${temperaturaFahrenheit} Fahrenheit`);
});

//Questão 10 - atividades do classroom
app.get("/calculate-age/:birth_year", (req, res) => {
  const birthYear = parseInt(req.params.birth_year);

  if (isNaN(birthYear)) {
    return res.status(400).send("Invalid number");
  }

  const year = new Date();
  let age = year.getFullYear() - birthYear;
  res.send(`Sua idade é ${age}`);
});

app.listen(3002, () => {
  console.log("Api da porta 3002 está funcionando");
});
