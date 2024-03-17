import { NextApiRequest, NextApiResponse } from 'next'
import { apiKey, password, PROD_URL, username } from '@/pages/api/config'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { user_token, salon_id, record_id } = JSON.parse(req.body)


	const URL = `${PROD_URL}/cancel_record/${salon_id}?record_id=${record_id}`

	const data = await fetch(URL, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
			apiKey,
			usertoken: user_token
		}
	}).then(async res => await res.json())


	if (data) {
		res.status(200).send(data)
	} else {
		res.status(404).send({ error: 'Error' })
	}
}

// Request example
