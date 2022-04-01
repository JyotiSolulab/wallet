import logger from './logger.js';

exports = {
	handleResponse: ({
		res,
		statusCode = 200,
		msg = 'Success',
		data = {},
		result = 1,
	}) => {
		logger.info(msg, JSON.stringify(data));
		res.status(statusCode).send({ result, msg, data });
	},
	handleError: ({
		res,
		statusCode = 500,
		err_msg = 'Server Error',
		data = {},
		result = 0,
	}) => {
		res.status(statusCode).send({
			result,
			err_msg,
			data,
		});
	},
};
