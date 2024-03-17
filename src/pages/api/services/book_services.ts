import { NextApiRequest, NextApiResponse } from 'next'
import { apiKey, password, PROD_URL, username } from '@/pages/api/config'
import { salon1, salon2 } from '@/data/salon_ids'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { salon_id, staff_id } = JSON.parse(req.body)

	if (salon_id) {
		const URL = `${PROD_URL}/book_services/${salon_id}?${staff_id ? `staff_id=${staff_id}` : ''}`

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
	} else {
		const URL1 = `${PROD_URL}/book_services/${salon1}?${staff_id ? `staff_id=${staff_id}` : ''}`
		const URL2 = `${PROD_URL}/book_services/${salon2}?${staff_id ? `staff_id=${staff_id}` : ''}`

		const salon1Services = await fetch(URL1, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
				apiKey
			}
		}).then(async res => await res.json()).then(res => res.Parameters)

		const salon2Services = await fetch(URL2, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
				apiKey
			}
		}).then(async res => await res.json()).then(res => res.Parameters)

		const combinedArray = [...salon1Services, ...salon2Services]

		const result = combinedArray.reduce((acc, obj) => {
			const found = acc.some((el: { id: string }) => el.id === obj.id)
			if (!found) {
				acc.push(obj)
			}
			return acc
		}, [])

		if (result) {
			res.status(200).send(result)
		} else {
			res.status(404).send({ error: 'Error' })
		}
	}
}

// Request example
// fetch(`/api/services/book_services`, {
// 	method: 'POST',
// 	body: JSON.stringify({
// 		salon_id: salon1,
// 		staff_id: '7a930662-46cd-493f-ba3f-584fcc813008'
// 	})
// }).then(async res => {
// 	console.log(await res.json())
// })