export type TypeServicesCategory = 'face'|'body'|'nails'|'hair'

export interface IService {
	id: string
	title: string
	category: TypeServicesCategory
	price: number
}