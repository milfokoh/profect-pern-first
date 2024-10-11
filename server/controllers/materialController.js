const { Material, Section } = require('../models/models');

const ApiError = require('../error/ApiError');
// const { where } = require('sequelize');

class materialController {
	async create(req, res, next) {
		try {
			let { title, content, sectionId, info } = req.body;
			const material = await Material.create({ title, content, sectionId });

			if (info) {
				info = JSON.parse(info);
			}

			return res.json(material);
		} catch (error) {
			next(ApiError.badRequest(error));
		}
	}

	async getAll(req, res) {
		let { title, sectionId } = req.query;
		let material;
		if (!sectionId && !title) {
			material = await Material.findAndCountAll({});
		}
		if (sectionId && !title) {
			material = await Material.findAndCountAll({
				where: { sectionId },
			});
		}
		if (!sectionId && title) {
			material = await Material.findAndCountAll({
				where: { title },
			});
		}
		return res.json(material);
	}

	async getOne(req, res) {
		const { id } = req.params;
		const material = await Material.findOne({
			where: { id },
			// include: [{ model: Section, as: 'info' }],
		});
		return res.json(material);
	}

	async update(req, res) {}

	async remove(req, res) {}
}

module.exports = new materialController();
