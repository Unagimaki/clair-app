import { formatStringToISO } from '@/utils/formatDateToISO8601'

interface getDatesInterface {
	salon_id: string
	staff_id: string
	service_id: string

}

export const getDates = (data: getDatesInterface): Promise<never[]> => {
	const { salon_id, staff_id, service_id } = data
	return new Promise((resolve) => {
		if (salon_id) {
			fetch(`/api/services/book_dates`, {
				method: 'POST',
				body: JSON.stringify({
					salon_id,
					staff_id,
					service_id
				})
			}).then(async res => {
				const resDates = await res.json()
				resolve(resDates.Parameters)
			})
		}
	})
}

interface getTimesInterface {
	salon_id: string
	staff_id: string
	service_id: string
	datetime: string
}

export const getTimes = (data: getTimesInterface): Promise<never[]> => {
	const { salon_id, staff_id, service_id, datetime } = data

	return new Promise((resolve) => {
		fetch(`/api/services/book_times`, {
			method: 'POST',
			body: JSON.stringify({
				salon_id,
				staff_id,
				service_id,
				datetime: formatStringToISO(datetime)
			})
		}).then(async res => {
			resolve(await res.json())
		})
	})
}