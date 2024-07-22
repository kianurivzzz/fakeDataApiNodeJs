import { faker } from '@faker-js/faker';
import { Router } from 'express';
import generateData from './utils.js';

/**
 * Роутер для работы с интернет-адресами
 */
const internetRouter = Router();

/**
 * Обработчик GET-запроса для получения электронных адресов
 * @param {Object} request - Объект запроса Express
 * @param {Object} response - Объект ответа Express
 * @returns {Object} - Объект с электронными адресами
 */
internetRouter.get('/emails/:count', (request, response) => {
	// Проверка на валидность request и параметров
	if (!request.params.count) {
		return response.status(400).json({ error: 'Неверные параметры' });
	}

	// Генерация электронных адресов с помощью faker и функции генератора
	const emails = generateData(request.params.count, faker.internet.email);
	response.json({ emails });
});

/**
 * Обработчик GET-запроса для получения доменов
 * @param {Object} request - Объект запроса Express.
 * @param {Object} response - Объект ответа Express.
 * @returns {Object} - Объект с доменами.
 */
internetRouter.get('/domains/:count', (request, response) => {
	// Проверка на валидность request и параметров
	if (!request.params.count) {
		return response.status(400).json({ error: 'Invalid parameters' });
	}

	// Генерация доменов с помощью faker и функции генератора
	const domainNames = generateData(
		request.params.count,
		faker.internet.domainName
	);

	// Отправка ответа с доменами
	response.json({ domainNames });
});

export default internetRouter;
