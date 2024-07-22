import { faker } from '@faker-js/faker';
import { Router } from 'express';
import generateData from './utils.js';

/**
 * Роутер для работы с людьми
 */
const personRouter = Router();

/**
 * Обработчик GET-запроса для получения имени
 * @param {Object} request - Объект запроса Express
 * @param {Object} response - Объект ответа Express
 */
personRouter.get('/firstnames/:count?', (request, response) => {
	// Проверка на валидность request и параметров
	if (!request || !request.params || !request.params.count) {
		response.status(400).json({ error: 'Invalid parameters' });
		return;
	}

	// Генерация имен с помощью faker и функции генератора
	const firstNames = generateData(
		request.params.count,
		faker.person.firstName
	);

	// Отправка ответа с именами
	response.json({
		firstNames,
	});
});

/**
 * Обработчик GET-запроса для получения фамилий
 * @param {Object} request - Объект запроса Express
 * @param {Object} response - Объект ответа Express
 */
personRouter.get('/lastnames/:count?', (request, response) => {
	// Проверка на валидность request и параметров
	if (!request || !request.params || !request.params.count) {
		response.status(400).json({ error: 'Invalid parameters' });
		return;
	}

	// Генерация фамилий с помощью faker и функции генератора
	const lastNames = generateData(request.params.count, faker.person.lastName);

	// Отправка ответа с фамилиями
	response.json({
		lastNames,
	});
});

/**
 * Обработчик GET-запроса для получения полов
 * @param {Object} request - Объект запроса Express
 * @param {Object} response - Объект ответа Express
 */
personRouter.get('/genders/:count?', (request, response) => {
	// Проверка на валидность request и параметров
	if (!request || !request.params || !request.params.count) {
		response.status(400).json({ error: 'Invalid parameters' });
		return;
	}

	// Генерация полов с помощью faker и функции генератора
	const genders = generateData(request.params.count, faker.person.sex);

	// Отправка ответа с полами
	response.json({
		genders,
	});
});

/**
 * Обработчик GET-запроса для получения номеров
 * @param {Object} request - Объект запроса Express
 * @param {Object} response - Объект ответа Express
 */
personRouter.get('/numbers/:count?', (request, response) => {
	// Проверка на валидность request и параметров
	if (!request || !request.params || !request.params.count) {
		response.status(400).json({ error: 'Invalid parameters' });
		return;
	}

	// Генерация номеров с помощью faker и функции генератора
	const numbers = generateData(
		request.params.count,
		faker.person.phoneNumber
	);

	// Отправка ответа с номерами
	response.json({
		numbers,
	});
});

export default personRouter;
