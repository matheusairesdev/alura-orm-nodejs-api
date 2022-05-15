const log4js = require('../tools/log4js');
const logger = log4js.getLogger('users');

const bodyParser = require("body-parser");

const userRoute = require("./userRoute");

module.exports = app =>{
    app.use(bodyParser.json());
    app.get('/', (req,res)=>{
        logger.trace('GET /');
        res.send("Hello, Matheus!")
    })

    app.use(userRoute);
}