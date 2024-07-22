/**
 * Генерирует данные, используя функцию генератор.
 * @param {number} count - Число генерируемых данных.
 * @param {function} generatorFunction - Функция генератор.
 * @returns {Array} - Массив сгенерированных данных.
 */
const generateData = (count, generatorFunction) => {
	// Проверка на валидность count
	if (typeof count !== 'number' || count < 0) {
		throw new Error('Можно использовать только положительные число');
	}

	// Проверка на валидность generatorFunction
	if (typeof generatorFunction !== 'function') {
		throw new Error('generatorFunction не является функцией');
	}

	// Генерирование данных
	const dataArray = Array.from({ length: count }, generatorFunction);

	// Проверка на валидность dataArray
	if (!dataArray || dataArray.length === 0) {
		throw new Error('Не получилось сгенерировать данные');
	}

	return dataArray;
};

export default generateData;
