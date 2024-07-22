import { faker } from '@faker-js/faker';
import { Router } from 'express';
import generator from './utils.js';

const personRouter = Router();
// baseurl = /api/name/

personRouter.get('/firstname/:count?', (request, response) => {
	const firstNames = generator(request.params.count, faker.person.firstName);

	response.json({
		firstNames,
	});
});

personRouter.get('/lastname/:count?', (request, response) => {
	const lastNames = generator(request.params.count, faker.person.lastName);
	response.json({
		lastNames,
	});
});

personRouter.get('/gender/:count?', (request, response) => {
	const genders = generator(request.params.count, faker.person.sex);

	response.json({
		genders: genders,
	});
});

// api/random/number
personRouter.get('/number/:count?', (request, response) => {
	const numbers = generator(request.params.count, faker.person.phoneNumber);
	response.json({
		numbers,
	});
});

export default personRouter;
