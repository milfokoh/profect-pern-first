const { Quiz, Student } = require('../models/models');
const ApiError = require('../error/ApiError');

class quizController {
	async create(req, res, next) {
		try {
			let { email, rating, studentId } = req.body;
			const quiz = await Quiz.create({ email, rating, studentId });

			return res.json(quiz);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}

	async getAll(req, res) {
		let { email, rating } = req.query;
		let quiz;
		if (!email && !rating) {
			quiz = await Quiz.findAndCountAll({
				// Включение информации о студенте
				// include: [{ model: Student, as: 'student' }],
			});
		}
		if (email && !rating) {
			quiz = await Quiz.findAndCountAll({
				where: { email },
				// include: [{ model: Student, as: 'student' }],
			});
		}
		if (!email && rating) {
			quiz = await Quiz.findAndCountAll({
				where: { rating },
				// include: [{ model: Student, as: 'student' }],
			});
		}
		return res.json(quiz);
	}

	async getOne(req, res) {
		const { studentId } = req.params; // Изменено на id для поиска по идентификатору
		const quiz = await Quiz.findOne({
			where: { studentId },
			// Включение информации о студенте
			// include: [{ model: Student, as: 'student' }],
		});
		return res.json(quiz);
	}

	async update(req, res) {
		const { studentId } = req.params; // Получаем studentId викторины из параметров
		const { rating, section } = req.body; // Получаем данные для обновления

		const quiz = await Quiz.findOne({ where: { studentId } });
		if (!quiz) {
			next(ApiError.badRequest(error.message));
		}

		// Обновляем данные викторины
		quiz.rating = rating !== undefined ? rating : quiz.rating;
		quiz.section = section !== undefined ? section : quiz.section;
		await quiz.save();

		return res.json(quiz);
	}

	async remove(req, res) {
		const { studentId } = req.params;
		const quiz = await Quiz.destroy({ where: { studentId } });
		if (!quiz) {
			next(ApiError.badRequest(error.message));
		}
		return res.json({ message: 'Quiz deleted successfully' });
	}
}

module.exports = new quizController();
