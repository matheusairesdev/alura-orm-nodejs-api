const database = require('../database/models');
const log4js = require('../tools/log4js');
const logger = log4js.getLogger('users');

const UserServices = require('../services/UserServices');
const userServices = new UserServices();



class UserController {
    static async listUsers(params = {}){
        logger.trace("listUsers");
        return await userServices.list(params);
    }
    static async create(data){
        logger.trace("createUser");
        return await userServices.create(data);
    }
}

module.exports = UserController