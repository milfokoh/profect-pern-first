import { makeAutoObservable } from 'mobx';

export default class SectionStore {
	constructor() {
		this._section = [];
		this._materials = [];
		this._selectedSec = {};
		makeAutoObservable(this);
	}

	setSection(section) {
		this._section = section;
	}
	setMaterials(materials) {
		this._materials = materials;
	}
	setSelectedSec(item) {
		this._selectedSec = item;
	}
	get section() {
		return this._section;
	}
	get materials() {
		return this._materials;
	}
	get selectedSec() {
		return this._selectedSec;
	}
}
