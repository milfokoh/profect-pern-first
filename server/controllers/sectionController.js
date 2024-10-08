const { Section, Material } = require('../models/models');
const ApiError = require('../error/ApiError');

class sectionController {
	async create(req, res) {
		const { name } = req.body;
		const section = await Section.create({ name });
		return res.json(section);
	}

	async getAll(req, res) {
		const section = await Section.findAll();
		return res.json(section);
	}

	async getOne(req, res) {
		const { id } = req.params;
		const section = await Section.findOne({
			where: { id },
			include: [{ model: Material, as: 'info' }],
		});
		return res.json(section);
	}

	async update(req, res) {}

	async remove(req, res) {}
}

module.exports = new sectionController();
