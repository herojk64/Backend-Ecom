const router = require("express").Router();
const userController = require('../controller/users.controllers');
router.route('/add').get(userController.addUser)

module.exports = router;