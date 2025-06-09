import { $host, $authHost } from './index';
import { jwtDecode } from 'jwt-decode';

export const registration = async (
	email,
	password,
	firstName,
	lastName,
	univer,
	groupUni
) => {
	const { data } = await $host.post('api/student/registration', {
		email,
		password,
		firstName,
		lastName,
		univer,
		groupUni,
		role: 'STUDENT',
	});
	localStorage.setItem('token', data.token);
	return jwtDecode(data.token);
};

export const login = async (email, password) => {
	const { data } = await $host.post('api/student/login', {
		email,
		password,
	});
	localStorage.setItem('token', data.token);
	return jwtDecode(data.token);
};

export const check = async () => {
	const { data } = await $authHost.get('api/student/auth');
	localStorage.setItem('token', data.token);
	return jwtDecode(data.token);
};

export const updateQuiz = async (studentId, rating, section) => {
	const { data } = await $host.put(`api/quiz/${studentId}`, {
		rating,
		section,
	});
	return data;
};

export const fetchOneQuiz = async id => {
	const { data } = await $authHost.get(`api/quiz/${id}`);
	return data;
};

export const fetchQuiz = async () => {
	const { data } = await $host.get('api/quiz');
	return data;
};
