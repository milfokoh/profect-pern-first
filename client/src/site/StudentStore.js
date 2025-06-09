import { makeAutoObservable } from 'mobx';

export default class StudentStore {
	constructor() {
		this._isAuth = false;
		this._user = {};
		this._name = {};
		this._info = {};
		makeAutoObservable(this);
	}

	setIsAuth(boolean) {
		this._isAuth = boolean;
	}
	setUser(user) {
		this._user = user;
	}
	setName({ lastName, firstName }) {
		this._name = { lastName, firstName };
	}
	setInfo({ univer, groupUni, rating, section, id }) {
		this._info = { univer, groupUni, rating, section, id };
	}
	get isAuth() {
		return this._isAuth;
	}
	get user() {
		return this._user;
	}
	get info() {
		return `${this._info.univer} / ${this._info.groupUni}`;
	}
	get name() {
		return `${this._name.firstName} ${this._name.lastName}`;
	}
	get rating() {
		return this._info.rating;
	}
	get section() {
		return this._info.section;
	}
	get studentId() {
		return this._info.id;
	}
}
