const {Router} = require('express');

const routes = Router();

const ctrl = require('./messages.controller');
const mdl = require('../middlewares');
const validation = require('./messages.validation');

routes.get('/', ctrl.showMessages);


/**
 * @api {POST} /messages/ Add new message
 * @apiVersion 0.0.3
 * @apiGroup Messages
 * @apiPermission user
 *
 * @apiParam {String=^[a-zA-Z]{3,}$} [username] User name
 * @apiParam {String{3..512}} message User message
 * @apiParam {Number{1..60}} [show=30] Show time in seconds
 *
 * @apiParamExample {json} Request-Example:
 *  {
 *      "message": "test@user.com",
 *      "show": 3
 *  }
 *
 * @apiSuccess {String{24}} _id Message ObjectId
 * @apiSuccessExample {json} Response-Example:
 *  {
 *
 *  }
 */
routes.post('/', mdl.validate(validation.addNewMessage), ctrl.addNewMessage);

module.exports = routes;
