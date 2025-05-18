const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Student } = require('../models/models');

const generateJwt = (
	id,
	email,
	firstName,
	lastName,
	univer,
	groupUni,
	role
) => {
	return jwt.sign(
		{ id, email, firstName, lastName, univer, groupUni, role },
		process.env.SECRET_KEY,
		{
			expiresIn: '1h',
		}
	);
};

class StudentController {
	async registration(req, res, next) {
		const { email, password, firstName, lastName, univer, groupUni, role } =
			req.body;
		if (!email || !password) {
			return next(ApiError.badRequest('Некорректный email или password'));
		}
		const candidate = await Student.findOne({ where: { email } });
		if (candidate) {
			return next(
				ApiError.badRequest('Такой пользователь уже зарегистрирован на сайте')
			);
		}
		const hashPassword = await bcrypt.hash(password, 5);
		const student = await Student.create({
			email,
			password: hashPassword,
			firstName,
			lastName,
			univer,
			groupUni,
			role,
		});
		// const adminPage = await AdminPage.create({studentId: student.id});
		const token = generateJwt(
			student.id,
			student.email,
			student.firstName,
			student.lastName,
			student.univer,
			student.groupUni,
			student.role
		);
		return res.json({ token });
	}

	async login(req, res, next) {
		const { email, password } = req.body;
		const student = await Student.findOne({ where: { email } });
		if (!student) {
			return next(ApiError.internal('Пользователь не найден'));
		}
		let comparePassword = bcrypt.compareSync(password, student.password);
		if (!comparePassword) {
			return next(ApiError.internal('Указан неверный пароль'));
		}
		const token = generateJwt(
			student.id,
			student.email,
			student.firstName,
			student.lastName,
			student.univer,
			student.groupUni,
			student.role
		);
		return res.json({ token });
	}

	async check(req, res, next) {
		const token = generateJwt(
			req.student.id,
			req.student.email,
			req.student.firstName,
			req.student.lastName,
			req.student.univer,
			req.student.groupUni,
			req.student.role
		);
		return res.json({ token });
	}

	async getAll(req, res) {
		let { title, sectionId } = req.query;
		let data;
		if (!sectionId && !title) {
			data = await Student.findAndCountAll({});
		}
		if (sectionId && !title) {
			data = await Student.findAndCountAll({
				where: { sectionId },
			});
		}
		if (!sectionId && title) {
			data = await Student.findAndCountAll({
				where: { title },
			});
		}
		return res.json(data);
	}
}

module.exports = new StudentController();
