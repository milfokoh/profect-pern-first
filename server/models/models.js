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

const Student = sequelize.define('student', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	firstName: { type: DataTypes.STRING },
	lastName: { type: DataTypes.STRING },
	univer: { type: DataTypes.STRING },
	groupUni: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: 'STUDENT' },
});

const Quiz = sequelize.define('quizzes', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	rating: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	section: {
		type: DataTypes.ARRAY(DataTypes.INTEGER),
		defaultValue: [null, null, null, null, null, null, null, null, null, null],
	},
});

Section.hasMany(Material, { as: 'info' });
Material.belongsTo(Section);

Student.hasMany(Quiz);
Quiz.belongsTo(Student);

module.exports = {
	User,
	Section,
	Material,
	Student,
	Quiz,
};
