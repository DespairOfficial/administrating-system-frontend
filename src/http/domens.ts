import { $host } from '.';

export async function getList() {
	return await $host.get('/').then((response) => {
		return response.data;
	});
}