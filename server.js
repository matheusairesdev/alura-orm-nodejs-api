const log4js = require('./src/tools/log4js');
const logger = log4js.getLogger('server');

const app = require('./src/app');

logger.info("Servidor iniciado com sucesso");