import { $host } from '.';
import { DomensListResponse, Domen } from '../interfaces/proxyResponse';



export async function getDomens(): Promise<DomensListResponse> {
	return await $host.get('/domens').then((response) => {
		return response.data;
	});
}
export async function addDomen(domen: Domen ){
	return await $host.post('/domens', domen).then((response)=>{
		return response.data
	})
}

export async function deleteDomen(domen: Domen ){
	return await $host.post('/domens/delete', domen).then((response)=>{
		return response.data
	})
}