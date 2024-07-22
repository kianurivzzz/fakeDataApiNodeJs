import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import internetRouter from './handlers/internet.js';
import personRouter from './handlers/person.js';

const app = express();
const port = process.env.port || 3000;

app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (request, response) => {
	if (!request) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}
	if (!response) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}
	response.json({ message: 'success', url: request.url });
});

app.get('/api', (request, response) => {
	if (!request) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}
	if (!response) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}
	response.json({
		message: 'API работает',
		url: request.url,
	});
});

// Карта маршрутов
app.use('/api/person', personRouter);
app.use('/api/internet', internetRouter);

app.use('/*', (request, response) => {
	if (!request) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}
	if (!response) {
		return response.status(500).json({ error: 'Ошибка сервера' });
	}
	response.json({ error: 'Маршрут не найден' }).status(404);
});

// Запуск веб-сервера
app.listen(port, () => {
	console.log(`Веб-сервер запущен. Ссылка: http://localhost:${port}`);
});
