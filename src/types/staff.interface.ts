export interface IStaff {
	'id': string
	'name': string
	'avatar': string | null
	'specialization': {
		'id': string
		'title': string
	},
	'weight': number,
	'information': string
	'upcoming_dates': string[]
	'ratings': any[],
	'comments_count': number
}