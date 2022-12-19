export interface ProxyResponse {
	status: number;
	message: string;
}
export interface DomensListResponse {
	domens: Domen[]
}
export interface Domen {
	name: string;
	server: string;
}