import { IService } from '@/types/service.interface'

// note логика следующая:
// 1) берем товары из сотни скринов lu (см конец апреля переписки Оля-Дима)
// 2) берем товары из 1С - http://83.139.173.173:85/SKRabot/hs/api/v1/book_services/3335604d-1bfa-11ea-9cad-e8d0fcfd9182
// 3) берем прайс, название, категорию, из (1) и id из (2)


export const servicesData: IService[] = [
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'face',
		price: 4700
	},
	{
		id: '1e5c9127-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: сервис для проблемной кожи',
		category: 'face',
		price: 6200
	},
	{
		id: '1e5c9128-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: премиальный сервис',
		category: 'face',
		price: 7700
	},

	{
		id: 'b7e8099e-41d0-11ea-9cb3-e8d0fcfd9182',
		title: 'Комплексный уход Icoone Laser',
		category: 'face',
		price: 3000
	},

	{
		id: 'b7e809a1-41d0-11ea-9cb3-e8d0fcfd9182',
		title: 'Аппаратный антивозрастной уход',
		category: 'face',
		price: 3000
	},

	{
		id: '05c7f7f3-bdfc-11eb-9d0b-9c5a448dbbb5',
		title: 'Уход для проблемной кожи OnMacabim',
		category: 'face',
		price: 2400
	},

	{
		id: 'b7e809a5-41d0-11ea-9cb3-e8d0fcfd9182',
		title: 'Лифтинговый уход OnMacabim',
		category: 'face',
		price: 2200
	},

	{
		id: '1e5c912f-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Увлажняющий уход OnMacabim',
		category: 'face',
		price: 2000
	}
]


export const serviceData: IService[] = [
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'face',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'face',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'face',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'face',
		price: 4700
	},

	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'body',
		price: 4700
	},

	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'body',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'body',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'body',
		price: 4700
	},

	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'hair',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'hair',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'hair',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'hair',
		price: 4700
	},

	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'nails',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'nails',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'nails',
		price: 4700
	},
	{
		id: '1e5c910b-f71a-11ea-9cde-9c5a448dbbb5',
		title: 'Комплексный уход HydraFacial: Базовый сервис',
		category: 'nails',
		price: 4700
	},
]