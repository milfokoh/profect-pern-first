const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Section = sequelize.define('section', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true },
});

const Material = sequelize.define('material', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING },
	content: { type: DataTypes.STRING },
});

Section.hasMany(Material, { as: 'info' });
Material.belongsTo(Section);

module.exports = {
	User,
	Section,
	Material,
};
