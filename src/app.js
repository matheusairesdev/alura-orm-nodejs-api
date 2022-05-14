const express = require("express");
const bodyParser = require("body-parser");
const log4js = require('./tools/log4js');
const logger = log4js.getLogger('app');

const app = express();

app.use(bodyParser.json());

const port = 7000;

app.get('/', (req,res)=>{
    logger.trace('GET /');
    res.send("Hello, Matheus!")
})


app.listen(port, ()=>{
    logger.info(`Servidor rodando na porta: ${port}`)
});

module.exports = app
