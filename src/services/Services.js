const log4js = require('../tools/log4js');
const logger = log4js.getLogger('users');
const database = require('../database/models');

class Services {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }

    async list(params){
        const filter = require('../functions/filterSequelizeOptions');
        const options = filter(params);

        try {
            const result = await database[this.nomeDoModelo].findAll(options);
            return {
                success:true,
                data:result
            }
        } catch (error) {
            return {
                success:false,
                message:error.message,
                error:Number(error.parent.code)
            }
        }
    }

    async create(data){
        logger.debug(data)
        try {
            const result = await database[this.nomeDoModelo].create(data);
            return {
                success:true,
                data:result
            }
        } catch (error) {
            return {
                success:false,
                message:error.message,
                error:Number(error.parent.code)
            }
        }
    }


}

module.exports = Services;