const log4js = require('../tools/log4js');
const logger = log4js.getLogger('users');
const { Router } = require('express');
const router = Router()

const UserController = require('../controllers/UserController');

router.get('/users', async (req, res) =>{

    const users = await UserController.listUsers(req.query);

    if(users.success){
        res.status(200).json(users.data);
    }else{
        logger.error(users.message);
        if(users.error === 42703){
            res.status(406).json(users)
        }else{
            res.status(500).json(users);
        };

    }
})

module.exports = router