import { faker } from '@faker-js/faker';
import { Router } from 'express';
import generator from './utils.js';
const internetRouter = Router();

// baseurl = /api/internet/

internetRouter.get('/email/:count?', (request, response) => {
	const emails = generator(request.params.count, faker.internet.email);
	response.json({
		emails: emails,
	});
});

internetRouter.get('/domain/:count?', (request, response) => {
	const domains = generator(request.params.count, faker.internet.domainName);
	response.json({
		domainNames: domains,
	});
});

export default internetRouter;
