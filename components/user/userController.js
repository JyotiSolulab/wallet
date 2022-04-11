import { sendResponseWithJWt } from '../../middleware/auth.js';
import { handleError } from '../../config/handler.js';

const signup = async (req, res) => {
	try {
		console.log('entering signup');
		const { name, email, password, passwordConfirm } = req.body;
		const result = createUser(name, email, password, passwordConfirm);

		sendResponseWithJWt(result, 201, res);
	} catch (err) {
		console.log(err);
		return handleError({
			res,
			statusCode: 401,
			err_msg: 'error in sign up',
		});
	}
};

export default signup;
