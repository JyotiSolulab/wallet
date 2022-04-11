import mongoose from 'mongoose';

const transaction = mongoose.Schema({
	from: {
		type: String,
	},

	to: {
		type: String,
	},

	value: {
		type: String,
	},

	status: {
		type: Boolean,
	},

	timestamp: {
		type: Date,
	},
});

const Transaction = mongoose.model('Transaction', transaction);

export default Transaction;
