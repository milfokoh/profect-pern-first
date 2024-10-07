import { $host, $authHost } from './index';
import { jwtDecode } from 'jwt-decode';

export const createSection = async section => {
	const { data } = await $authHost.post('api/section', section);
	return data;
};

export const fetchSection = async () => {
	const { data } = await $host.get('api/section');
	return data;
};

export const fetchOneSection = async id => {
	const { data } = await $host.get(`api/section/${id}`);
	return data;
};

export const createMaterial = async materials => {
	const { data } = await $authHost.post('api/material', materials);
	return data;
};

export const fetchMaterial = async () => {
	const { data } = await $host.get('api/material');
	return data;
};
