import { NextApiRequest, NextApiResponse } from 'next'
import { apiKey, password, PROD_URL, username } from '@/pages/api/config'
import { formatDateToISO8601 } from '@/utils/formatDateToISO8601'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { salon_id, staff_id, service_id } = JSON.parse(req.body)


	const startDate = new Date()
	startDate.setHours(0, 0, 0, 0)

	const endDate = new Date()
	endDate.setMonth(endDate.getMonth() + 1, 0)
	endDate.setHours(23, 59, 59, 999)

	const URL = `${PROD_URL}/book_dates/${salon_id}?start_date=${formatDateToISO8601(startDate)}&end_date=${formatDateToISO8601(endDate)}${staff_id ? `&staff_id=${staff_id}` : ''}${service_id ? `&service_id=${service_id}` : ''}`

	const data = await fetch(URL, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
			apiKey
		}
	}).then(async res => await res.json()).then(res => res.Parameters)


	if (data) {
		res.status(200).send(data)
	} else {
		res.status(404).send({ error: 'Error' })
	}
}

// Request example
// fetch(`/api/services/book_dates`, {
// 	method: 'POST',
// 	body: JSON.stringify({
// 		salon_id: salon1,
// 		staff_id: '7a930662-46cd-493f-ba3f-584fcc813008',
// 		service_id: '3921f232-96a1-11eb-9d03-9c5a448dbbb5'
// 	})
// }).then(async res => {
// 	console.log(await res.json())
// })