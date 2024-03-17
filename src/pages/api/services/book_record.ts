import { NextApiRequest, NextApiResponse } from 'next'
import { apiKey, password, PROD_URL, username } from '@/pages/api/config'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { user_token, salon_id, record_array } = JSON.parse(req.body)

	// NOTE
	// record_array = [
	// 	{
	// 		datetime,
	// 		service_id,
	// 		staff_id
	// 	}
	// ]

	const URL = `${PROD_URL}/book_record/${salon_id}`

	const data = await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
			apiKey,
			usertoken: user_token
		},
		body: JSON.stringify({
			record_array
		})
	}).then(async res => await res.json()).then(res => res.Parameters)


	if (data) {
		res.status(200).send(data)
	} else {
		res.status(404).send({ error: 'Error' })
	}
}

// Request example
