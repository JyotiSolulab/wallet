import express from 'express';
import cors from 'cors';
import './config/config.js';
import mongoInit from './config/db.js';

const app = express();
mongoInit();

app.use(cors());
app.use(
	express.json({
		verify: (req, res, buf) => {
			req.rawBody = buf;
		},
	})
);
app.use(express.urlencoded({ extended: false }));
app.all('*', (req, res, next) => {
	// next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
	next(
		handleError({
			res,
			statusCode: 404,
			err: `Can't find ${req.originalUrl} on this server!`,
		})
	);
});

export default app;
