const express = require("express");
const routes = require("./routes");
const log4js = require('./tools/log4js');
const logger = log4js.getLogger('app');


const app = express();
app.use(express.urlencoded({extended: true}))

routes(app);

const port = 7000;
app.listen(port, ()=>{
    logger.info(`Servidor rodando na porta: ${port}`)
});

module.exports = app
