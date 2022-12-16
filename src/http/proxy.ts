import { $host } from '.';
import { ProxyResponse } from '../interfaces/proxyResponse';

export async function proxyOn(): Promise<ProxyResponse> {
	return await $host.get('/proxy/on').then((response) => {
		return response.data;
	});
}
export async function proxyOff(): Promise<ProxyResponse> {
	return await $host.get('/proxy/off').then((response) => {
		return response.data;
	});
}

export async function isProxyOn(): Promise<ProxyResponse> {
	return await $host.get('/proxy/isOn').then((response) => {
		return response.data;
	});
}
