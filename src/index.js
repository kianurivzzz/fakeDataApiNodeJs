import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import internetRouter from './handlers/internet.js';
import personRouter from './handlers/person.js';

/**
 * Создание приложения
 */
const app = express();
const port = process.env.port || 3000;

/**
 * Включение логгирования
 */
app.use(morgan('dev'));

/**
 * Включение парсинга JSON и URL-encoded
 */
app.use(json());
app.use(urlencoded({ extended: true }));

/**
 * Корневой маршрут
 */
app.get('/', (request, response) => {
	/**
	 * Проверка на валидность объектов запроса и ответа
	 */
	if (!request) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}
	if (!response) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}

	/**
	 * Возвращение успешного сообщения
	 */
	response.json({ message: 'success', url: request.url });
});

/**
 * Маршрут API
 */
app.get('/api', (request, response) => {
	/**
	 * Проверка на валидность объектов запроса и ответа
	 */
	if (!request) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}
	if (!response) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}

	/**
	 *Возвращение успешного сообщения
	 */
	response.json({
		message: 'API работает',
		url: request.url,
	});
});

/**
 * Карта маршрутов
 */
app.use('/api/person', personRouter);
app.use('/api/internet', internetRouter);

/**
 * Любой другой маршрут
 */
app.use('/*', (request, response) => {
	/**
	 * Проверка на валидность объектов запроса и ответа
	 */
	if (!request) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}
	if (!response) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}

	/**
	 * Возвращение ошибки 404
	 */
	response.json({ error: 'Маршрут не найден' }).status(404);
});

/**
 * Запуск веб-сервера
 */
app.listen(port, () => {
	console.log(`Веб-сервер запущен. Ссылка: http://localhost:${port}`);
});
