const {Router} = require('express');

const routes = Router();

const ctrl = require('./users.controller');
const mdl = require('../middlewares');
const validation = require('./users.validation');

/**
 * @api {POST} /users/register Register new user
 * @apiVersion 0.0.1
 * @apiGroup Users
 * @apiPermission all
 *
 * @apiParam {String{5..100}} email User email
 * @apiParam {String{5..100}} password User password
 * @apiParam {String} [username] User name
 *
 * @apiParamExample {json} Request-Example:
 *  {
 *      "email": "test@user.com",
 *      "password": "qwerty123"
 *  }
 *
 * @apiParamExample {json} Second-Request-Example:
 *  {
 *      "email": "test1@user.com",
 *      "password": "qwerty1231"
 *  }
 *
 * @apiSuccess {String{24}} _id User ObjectId
 * @apiSuccess {String{5..100}} email User email
 * @apiSuccess {String} password User password
 * @apiSuccess {String} addedAt User creation date
 * @apiSuccess {String} updateAt User last update date
 *
 * @apiSuccessExample {json} Response-Example:
 *  {
 *      "_id": "2342134rfaserqw3",
 *      "email": "test@user.com",
 *      "password": "aeRQAw34wrfaw3345a"
 *  }
 */
routes.post('/register', mdl.validate(validation.register), ctrl.registerNewUser);


module.exports = routes;
